<script lang="ts">
	import type { Projects } from "../../projects";
	import { activeProjectID } from "../../stores";

	import Monogram from "../../assets/Monogram.svelte";

	export let projects: Projects;
	export let verticalFrom = Infinity;
</script>

<ul>
	<li
		class="logo"
		class:active={$activeProjectID === undefined}
	>
		<a href="." on:click>
			<Monogram />
		</a>
	</li>
	{#each Object.values(projects) as { id }}
		<li
			class:vertical={id.length > verticalFrom}
			class:active={id === $activeProjectID}
		>
			<a href="#{id}" on:click>
				<span class="id">{id}</span>
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;

		display: flex;
		flex-direction: column;
		gap: 0.25em;

		font-family: var(--f-display);
		font-variant-numeric: tabular-nums;
		line-height: 1;
	}

	li {
		display: flex;
		flex-direction: column;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;

		opacity: 0.5;
		transition-property: opacity, color;
	}

	a:hover, a:focus-visible, .active a {
		opacity: 1;
	}

	.vertical a {
		writing-mode: vertical-lr;
	}

	.vertical a .id {
		margin-right: -10%;
	}

	.logo {
		height: 1em;
		padding: 0.125em 0;
	}
	.logo a {
		height: 100%;
	}
	.logo a :global(svg) {
		height: 100%;
	}
</style>
