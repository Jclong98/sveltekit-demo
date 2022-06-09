<!-- special script section that can load data serverside -->
<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';

	export async function load({ fetch }: LoadEvent) {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await res.json();

		if (res.ok) {
			return {
				props: {
					posts
				}
			};
		}

		return {
			status: res.status,
			error: new Error("Couldn't fetch posts")
		};
	}
</script>

<script lang="ts">
	interface Post {
		id: number;
		title: string;
		body: string;
	}

	export let posts: Post[] = [];
</script>

<div class="posts">
	{#each posts as post}
		<div class="posts__post">
			<h3 class="posts__post-title">
				<!-- prefetching the page that this link points to if you hover it -->
				<a sveltekit:prefetch href={`/posts/${post.id}`}>{post.title}</a>
			</h3>
		</div>
	{/each}
</div>

<style>
	.posts {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
	}

	.posts__post {
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #fafafa;
		padding: 1rem;
	}

	.posts__post-title {
		font-size: 1.5em;
		font-weight: bold;
		margin: 0;
	}
</style>
