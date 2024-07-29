<script lang="ts">
	import projects from "../projects";

	import Navigation from "$lib/nav/Navigation.svelte";
	import Hero from "$lib/Hero.svelte";
	import ProjectOverview from "$lib/ProjectOverview.svelte";
	import Projects from "$lib/Projects.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<main>
	<Navigation {projects} />
	<Hero title="Heidi Meyer" text="I’m a freelance industrial designer. Here are some examples of my work." />
	<ProjectOverview {projects} />
	<Projects {projects} />
	<Footer>
		<p>
			Designed by
			<strong>Heidi Meyer</strong>
			and developed by
			<strong><a href="https://github.com/Muhlex" target="_blank" rel="noopener">Felix Bastian</a></strong>.
		</p>
	</Footer>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>
