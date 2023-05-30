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
		<img src={image} alt="">
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
		background-color: var(--c-back-s1);
	}

	.image.no-image {
		width: 100%;
		aspect-ratio: 4 / 1;
	}

	img {
		display: block;
		width: 100%;
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
		grid-template-columns: repeat(2, 1fr);
	}

	.description {
		grid-area: -1 / 1 / -2 / 2;
		align-self: flex-end;
		padding-bottom: 1em;

		font-weight: bold;
		font-size: 1.125em;
		white-space: pre-line;
	}
</style>
