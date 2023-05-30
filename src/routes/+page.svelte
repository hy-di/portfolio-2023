<script lang="ts">
	import projects from "../projects";

	import Project from "../lib/Project.svelte";
	import Hero from "../lib/Hero.svelte";
	import ProjectOverview from "../lib/ProjectOverview.svelte";
</script>

<main>
	<Hero title="Heidi Meyer" text="I’m a junior industrial designer and here is some of my work." />
	<ProjectOverview {projects} />
	{#each projects as project}
		<Project {project} />
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 256px;
	}
</style>
