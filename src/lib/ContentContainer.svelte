<script lang="ts">
	export let element = "div";
</script>

<svelte:element this={element} class="content">
	<slot />
</svelte:element>

<style>
	.content {
		--padding: 1em;

		width: 100%;
		max-width: calc(var(--l-content-max-width) + var(--padding) * 2);
		padding: 0 var(--padding);
		margin: 0 auto;
	}
</style>
