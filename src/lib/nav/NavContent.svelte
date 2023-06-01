<script lang="ts">
	import type { Projects } from "../../projects";
	import { activeProjectID } from "../../stores";

	export let projects: Projects;
	export let verticalFrom = 2;
</script>

<ul>
	{#each Object.values(projects) as { id }}
		<li
			class:vertical={id.length > verticalFrom}
			class:active={id === $activeProjectID}
		>
			<a href="#{id}">{id}</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;

		font-family: var(--f-display);
		font-variant-numeric: tabular-nums;
	}

	li {
		display: flex;
		flex-direction: column;
		color: hsl(var(--c-fore-hsl), 0.4);
	}

	.active {
		color: inherit;
	}

	.vertical a {
		writing-mode: vertical-lr;
	}

	a {
		text-decoration: none;
	}
</style>
