<script lang="ts">
	import { onMount } from "svelte";
	import type { Projects } from "../projects";
	import { activeProjectID } from "../stores";

	import Project from "$lib/Project.svelte";

	export let projects: Projects;

	let preProjectEl: HTMLDivElement;
	const projectEls: HTMLDivElement[] = [];

	let observer: IntersectionObserver | null = null;
	onMount(() => {
		observer = new IntersectionObserver(entries => {
			for (const { isIntersecting, target } of entries) {
				if (!isIntersecting) continue;
				$activeProjectID = (target as HTMLElement).dataset.id;
			}
		}, { rootMargin: '-25% 0% -75% 0%', threshold: 0 });
	});

	$: if (observer) {
		observer.disconnect();
		observer.observe(preProjectEl);
		projectEls.forEach(observer.observe);
	}
</script>

<div class="projects">
	<div class="scroll-observer-target-pre-projects">
		<div bind:this={preProjectEl} />
	</div>
	<div class="projects-list">
		{#each Object.values(projects) as project, i}
			<div class="project" data-id={project.id} bind:this={projectEls[i]}>
				<Project {project} />
			</div>
		{/each}
	</div>
</div>

<style>
	.projects-list {
		display: flex;
		flex-direction: column;
		margin: 192px 0;
		gap: 192px;
	}

	.scroll-observer-target-pre-projects {
		width: 0;
		position: relative;
	}
	.scroll-observer-target-pre-projects div {
		position: absolute;
		bottom: 0;
		height: 99999vh;
	}
</style>
