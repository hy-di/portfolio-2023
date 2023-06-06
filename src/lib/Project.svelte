<script lang="ts">
	import type { Project } from "../projects";
	import ProjectHeader from "./ProjectHeader.svelte";
	import ContentContainer from "./ContentContainer.svelte";

	export let project: Project;
</script>

<article id={project.id}>
	<ProjectHeader {project} />
		<ContentContainer>
			<svelte:component this={project.details} />
		</ContentContainer>
</article>
