<script lang="ts">
	import ContentContainer from "./ContentContainer.svelte";

	export let title: string;
	export let description: string | undefined;
	export let image: string | undefined;
</script>

<header>
	<ContentContainer>
		<h2>{title}</h2>
	</ContentContainer>
	<div class="image" class:no-image={!image}>
		{#if image}
			<img src={image} alt="">
		{/if}
		<div class="image-overlay">
			<ContentContainer>
				{#if description}
					<p class="description">{description}</p>
				{/if}
			</ContentContainer>
		</div>
	</div>
</header>

<style>
	h2 {
		margin-bottom: 2rem;
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

	.image-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.image-overlay > :global(*) {
		height: 100%;

		display: grid;
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: 1fr;
	}

	.description {
		grid-area: -1 / 1 / -2 / 2;
		align-self: flex-end;
		padding-bottom: 1em;

		color: var(--c-back);
		--c-shadow: hsl(var(--c-fore-h), var(--c-fore-s), calc(var(--c-fore-l) / 2), 0.5);
		text-shadow: 0 0 0.125em var(--c-shadow),
			0 0.125em 0.25em var(--c-shadow),
			0 0 2em var(--c-shadow);
		font-weight: bold;
		font-size: 1.125em;

		white-space: pre-line;
	}
</style>
