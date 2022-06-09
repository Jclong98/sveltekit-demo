<script lang="ts">
	import NavBar from '$lib/NavBar.svelte';
	import '../styles/global.css';
</script>

<NavBar />

<main>
	<slot />
</main>

<footer>
	<p>&copy; Jacob Long 2022</p>
</footer>
