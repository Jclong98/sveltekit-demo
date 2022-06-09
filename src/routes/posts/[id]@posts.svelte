<!-- special script section that can load data serverside -->
<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';

	export async function load({ fetch, params }: LoadEvent) {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
		const post = await res.json();

		if (res.ok) {
			return {
				props: {
					post
				}
			};
		}

		// redirecting the user back to posts if the post doesn't exist
		return {
			status: 301,
			redirect: '/posts'
		};
	}
</script>

<script lang="ts">
	interface Post {
		id: number;
		title: string;
		body: string;
	}

	export let post: Post;
</script>

<div class="post">
	<h3>{post.title}</h3>
	<p>{post.body}</p>
</div>

<style>
	.post {
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #fafafa;
		padding: 1rem;
		max-width: 600px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.post h3 {
		font-size: 1.5em;
		font-weight: bold;
		margin: 0;
	}

	.post p {
		margin: 0;
	}
</style>
