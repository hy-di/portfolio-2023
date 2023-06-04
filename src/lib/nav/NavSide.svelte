<script lang="ts" context="module">
	import { writable } from "svelte/store";

	export const width = writable(0);
</script>

<script lang="ts">
	import type { Projects } from "../../projects";
	import { activeProjectID } from "../../stores";

	import NavContent from "./NavContent.svelte";

	export let projects: Projects;

	$: hide = ($activeProjectID === undefined);
</script>

<nav class:hide bind:clientWidth={$width}>
	<div class="nav-content">
		<NavContent {projects} verticalFrom={2} />
	</div>
</nav>

<style>
	nav {
		position: fixed;
		z-index: 1;
		top: 0;
		bottom: 0;
		right: 0;
		padding-right: 1rem;
		padding-left: 1rem;

		display: flex;
		flex-direction: column;
		justify-content: center;

		font-size: 2.5em;
	}

	nav {
		transition: transform 200ms var(--ease-out-circ);
	}
	nav.hide {
		transform: translateX(100%);
		transition-timing-function: var(--ease-in-circ);
	}

	@media (max-width: 799px) {
		nav {
			/* Not setting display: none here, so we can still observe the clientWidth. */
			padding: 0;
		}
		.nav-content {
			display: none;
		}
	}
</style>
