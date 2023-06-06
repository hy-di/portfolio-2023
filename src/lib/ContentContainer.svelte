<script lang="ts">
	import { width as navSideWidth } from "./nav/NavSide.svelte";

	export let element = "div";
</script>

<svelte:element
	this={element}
	class="content"
	style:--nav-side-width="{$navSideWidth}px"
>
	<slot />
</svelte:element>

<style>
	.content {
		--padding: 1em;

		width: 100%;
		max-width: calc(var(--l-content-max-width) + var(--padding) * 2 + var(--nav-side-width));
		padding-left: var(--padding);
		padding-right: calc(var(--padding) + var(--nav-side-width));
		margin: 0 auto;
	}
</style>
