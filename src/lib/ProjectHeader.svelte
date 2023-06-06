<script lang="ts">
	import type { Project } from "../projects";

	import ContentContainer from "./ContentContainer.svelte";

	export let project: Project;

	let headlineElWidth = 0;
	let idElWidth = 0;
	$: idScale = Math.min(headlineElWidth / idElWidth, 1);
</script>

<header>
	<ContentContainer>
		<div class="headline" bind:clientWidth={headlineElWidth}>
			{#if project.logo}
				<div class="logo">
					<svelte:component this={project.logo} title={project.title} />
				</div>
			{:else}
				<h2>{project.title}</h2>
			{/if}
			<span class="id" bind:clientWidth={idElWidth} style:--scale={idScale}>
				{project.id}
			</span>
		</div>
	</ContentContainer>
	<div class="image" class:no-image={!project.headerImage}>
		{#if project.headerImage}
			<img src={project.headerImage} alt="">
		{/if}
	</div>
</header>

<style>
	.headline {
		display: flex;
		align-items: flex-end;
		position: relative;
		min-height: 10em;
	}

	h2 {
		font-family: var(--f-display);
		margin-bottom: 1rem;
	}

	.logo {
		height: 4em;
		margin-bottom: 1rem;
	}
	.logo :global(svg) {
		height: 100%;
		width: auto;
	}

	.id {
		font-family: var(--f-display);
		font-size: 12em;
		line-height: 0.75;
		color: hsl(var(--c-fore-hsl), 0.2);
		user-select: none;

		position: absolute;
		right: 0;
		bottom: -0.08em;

		transform-origin: bottom right;
		transform: scale(var(--scale));
	}

	.image {
		position: relative;
		background-color: hsl(var(--c-back-h), var(--c-back-s), calc(var(--c-back-l) - 10%));
	}

	img, .image.no-image {
		width: 100%;
		min-height: 200px;
		max-height: 600px;
	}

	.image.no-image {
		aspect-ratio: 4 / 1;
	}

	img {
		display: block;
		width: 100%;
		min-height: 200px;
		max-height: 600px;
		object-fit: cover;
	}
</style>
