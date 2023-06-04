<script lang="ts">
	export let image: string;
	export let alt = "";
	export let flip = false;
	export let verticalAlign: "start" | "center" | "end" = "center";
</script>

<section class:flip style:--vertical-align={verticalAlign}>
	<div class="content">
		<slot />
	</div>
	<img src={image} {alt}>
</section>

<style>
	.content :global(p + p),
	.content :global(p + img) {
		margin-top: 1.5em;
	}

	.content :global(img) {
		display: block;
		min-width: 0;
		width: 100%;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 1.5em;

		margin-top: 4rem;
	}

	@media (min-width: 800px) {
		section {
			gap: 6em;
			flex-direction: row;
			align-items: var(--vertical-align);
		}
		section.flip {
			flex-direction: row-reverse;
		}

		.content {
			flex-grow: 1;
			flex-basis: 26ch;
		}

		img {
			flex-shrink: 9999999;
			max-height: 400px;
			min-width: 80px;
		}
	}
</style>
