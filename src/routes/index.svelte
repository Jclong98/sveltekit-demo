<!-- special script section that can load data serverside -->
<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';

	export async function load({ fetch }: LoadEvent) {
		const res = await fetch('/views.json');
		const { views } = await res.json();

		if (res.ok) {
			return {
				props: {
					views
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
	import Counter from '$lib/Counter.svelte';

	export let views = 0;
</script>

<div>
	<h2>Page Views: {views}</h2>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque. Nam nisi ipsa amet
		exercitationem velit recusandae libero magnam, optio beatae quidem, modi veniam repudiandae.
	</p>

	<Counter />
	<Counter />
</div>
