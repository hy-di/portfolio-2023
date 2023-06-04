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
		animation: slide-up 1000ms 500ms ease backwards;
	}

	p {
		font-size: 1.5em;
		max-width: 25ch;
		animation: slide-up 1000ms 1500ms ease backwards;
	}

	.text {
		padding-bottom: 4em; /* for better visual balance */
	}

	@keyframes slide-up {
		0% {
			opacity: 0;
			transform: translateY(1em);
		}
		100% {
			opacity: 1;
			transform: none;
		}
	}
</style>
