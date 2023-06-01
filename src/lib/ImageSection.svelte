<script lang="ts">
	export let image: string;
	export let alt = "";
	export let flip = false;
</script>

<section class:flip>
	<div class="content">
		<slot />
	</div>
	<img src={image} {alt}>
</section>

<style>
	.content :global(p + p) {
		margin-top: 1.5em;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 1.5em;

		margin-top: 4rem;
	}

	@media (min-width: 800px) {
		section {
			align-items: center;
			gap: 6em;
			flex-direction: row;
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
