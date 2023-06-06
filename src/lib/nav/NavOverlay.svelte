<script lang="ts">
	import { fly, type FlyParams } from "svelte/transition";
	import { sineIn, sineOut } from "svelte/easing";

	import type { Projects } from "../../projects";

	import NavContent from "./NavContent.svelte";

	export let projects: Projects;
	export let open = false;

	const flyConfig: FlyParams = { duration: 300, x: '100%' };
</script>

{#if open}
	<!-- svelte-ignore a11y-click-events-have-key-events-->
	<nav
		in:fly={{...flyConfig, easing: sineOut}}
		out:fly={{...flyConfig, easing: sineIn}}
		on:click|self={() => open = false}
	>
		<div class="backdrop">
			<NavContent {projects} on:click={() => open = false} />
		</div>
	</nav>
{/if}

<style>
	nav {
		position: fixed;
		z-index: 1;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding-left: 3rem;
	}

	.backdrop {
		height: 100%;

		color: var(--c-back);
		background-color: hsl(var(--c-fore-hsl), 0.8);
		backdrop-filter: blur(20px);

		--content-width: calc(100vw - 3rem - 1em * 2);
		font-size: clamp(1em, calc(var(--content-width) / 8), 4em);
		padding: 1em;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	@media (min-width: 800px) {
		nav {
			display: none;
		}
	}
</style>
