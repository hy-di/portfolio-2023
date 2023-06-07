<script lang="ts">
	import Monogram from '../assets/Monogram.svelte';

	export let title: string;
	export let text: string | string[] = [];
</script>

<section>
	<div class="logo">
		<Monogram />
	</div>
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

	.logo {
		width: 36ch;
		max-width: 100%;
		color: var(--c-primary);
		padding: 1em;
		padding-bottom: 0;
	}

	.logo :global(svg) {
		display: block;
		width: 100%;
	}

	h1 {
		line-height: 1;
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
