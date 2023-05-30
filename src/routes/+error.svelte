<script lang="ts">
	import { page } from '$app/stores';
	$: error = $page.error;
</script>

<main>
	<h1>{error?.message}</h1>
	<p>Status Code: <b>{$page.status}</b></p>
</main>

<style>
	main {
		flex-grow: 1;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 1em;
	}
</style>
