<script lang="ts">
	export let open = false;
</script>

<button class:open aria-label="Toggle Navigation" on:click>
	<div />
	<div />
	<div />
</button>

<style>
	button {
		--gap: 0.25em;
		--rotations: 2;

		--rotation-mult: calc(var(--rotations) * 2 - 1);

		position: fixed;
		z-index: 1;
		right: 0.5em;
		bottom: 0.5em;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--gap);

		padding: 1.5em;
		aspect-ratio: 1;
		border-radius: 50%;
		color: var(--c-back);
		background-color: var(--c-fore);
		box-shadow: 0 0.125em 0.5em hsl(var(--c-fore-hsl), 0.5);

		transition: background-color 300ms ease;
	}

	button:hover, button:focus-visible {
		background-color: var(--c-primary);
	}

	button div {
		flex-shrink: 0;

		background-color: currentColor;
		height: 0.125em;
		width: 1.5em;

		transition: transform 300ms ease;
	}

	button.open div:nth-child(1) {
		transform: translateY(calc(100% + var(--gap))) rotate(calc(-45deg * var(--rotation-mult)));
	}
	button.open div:nth-child(2) {
		transform: scaleX(0);
	}
	button.open div:nth-child(3) {
		transform: translateY(calc(-100% - var(--gap))) rotate(calc(45deg * var(--rotation-mult)));
	}

	@media (min-width: 800px) {
		button {
			display: none;
		}
	}
</style>
