<script lang="ts">
	import projects from "../projects";

	import SideNav from "$lib/nav/SideNav.svelte";
	import Hero from "$lib/Hero.svelte";
	import ProjectOverview from "$lib/ProjectOverview.svelte";
	import Projects from "$lib/Projects.svelte";
</script>

<SideNav {projects} />
<main>
	<Hero title="Heidi Meyer" text="I’m a junior industrial designer and here is some of my work." />
	<ProjectOverview {projects} />
	<Projects {projects} />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
