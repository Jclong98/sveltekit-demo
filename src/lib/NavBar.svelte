<nav class="navbar">
	<h1>
		<a href="/">Svelte Demo</a>
	</h1>

	<ul>
		<li>
			<a href="/posts">Posts</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
	</ul>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		background-color: #fafafa;
		border-bottom: 1px solid #ccc;
	}

	.navbar ul {
		display: flex;
		list-style: none;
		gap: 10px;
	}
</style>
