<script lang="ts">
	import monogram from '../assets/monogram.svg';

	export let title: string;
	export let text: string | string[] = [];
</script>

<section>
	<img src={monogram} alt="">
	<div class="text">
		<h1>{title}</h1>
		{#each [text].flat() as p}
			<p>{p}</p>
		{/each}
	</div>
</section>

<style>
	section {
		min-height: 100vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 1em;
		gap: 4em;
		text-align: center;
	}

	img {
		display: block;
		width: 33.3%;
		min-width: 100px;
		max-width: 520px;
		aspect-ratio: 1;
	}

	h1 {
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.5em;
		max-width: 25ch;
	}

	.text {
		padding-bottom: 4em; /* for better visual balance */
	}
</style>
