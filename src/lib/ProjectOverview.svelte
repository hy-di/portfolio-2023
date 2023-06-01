<script lang="ts">
	import type { Projects } from "../projects";

	import ContentContainer from "./ContentContainer.svelte";
	import ProjectThumb from "./ProjectThumb.svelte";

	export let projects: Projects;
</script>

<ContentContainer>
	<section>
		{#each Object.values(projects) as { id, icon }}
			<ProjectThumb {id} {icon} />
		{/each}
	</section>
</ContentContainer>

<style>
	section {
		--gap: 4em;
		--max-columns: 3;
		--item-min-width: 160px;

		--gap-count: calc(var(--max-columns) - 1);
		--gap-width-total: calc(var(--gap-count) * var(--gap));
		--item-max-width: calc((100% - var(--gap-width-total)) / var(--max-columns));

		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(max(var(--item-min-width), var(--item-max-width)), 1fr));
		gap: var(--gap);
	}
</style>
