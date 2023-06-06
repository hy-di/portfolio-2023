<script lang="ts">
	import type { Projects } from "../../projects";

	import NavSide from "./NavSide.svelte";
	import NavToggle from "./NavToggle.svelte";
	import NavOverlay from "./NavOverlay.svelte";

	export let projects: Projects;

	let open = false;
</script>

<NavSide {projects} />
<NavOverlay {projects} bind:open />
<NavToggle {open} on:click={() => open = !open} />
