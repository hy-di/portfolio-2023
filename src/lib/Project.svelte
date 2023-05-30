<script lang="ts">
	import type { Project } from "../projects";
	import ProjectHeader from "./ProjectHeader.svelte";
	import ContentContainer from "./ContentContainer.svelte";

	export let project: Project;
</script>

<article id={project.id}>
	<ProjectHeader title={project.title} description={project.description} image={project.headerImage} />
		<ContentContainer>
			<svelte:component this={project.details}/>
		</ContentContainer>
</article>
