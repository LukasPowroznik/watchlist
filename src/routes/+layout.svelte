<script>
	import favicon from "$lib/assets/favicon.svg";
	import	"./style.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
	<nav class="navbar navbar-expand-lg sticky-top" data-bs-theme="dark" style="background-color: rgba(15, 23, 42, 0.85); backdrop-filter: blur(10px);">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">Home</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<a class="nav-link active" aria-current="page" href="/"
						>Home</a>
					<a class="nav-link" href="/animes">Animes</a>
				</div>
			</div>
		</div>
	</nav>

	{@render children()}
</div>
