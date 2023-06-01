<script lang="ts">
	import { width as sideNavWidth } from "./nav/SideNav.svelte";

	export let element = "div";
</script>

<svelte:element
	this={element}
	class="content"
	style:--side-nav-width="{$sideNavWidth}px"
>
	<slot />
</svelte:element>

<style>
	.content {
		--padding: 1em;

		width: 100%;
		max-width: calc(var(--l-content-max-width) + var(--padding) * 2 + var(--side-nav-width));
		padding-left: var(--padding);
		padding-right: calc(var(--padding) + var(--side-nav-width));
		margin: 0 auto;
	}
</style>
