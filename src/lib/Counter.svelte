<script lang="ts">
	let count = 0;

	const inc = () => count++;
</script>

<button on:click={inc}>
	You've clicked me {count} times!
</button>
