<script lang="ts">
	export let id: string;
	export let icon: string;
</script>

<a
	href="#{id}"
	class="project-thumb"
	style:--icon="url('{icon}')"
>
	<svg viewBox="0 0 100 100">
		<foreignObject x="0" y="0" width="100" height="100">
			<h2>{id}</h2>
		</foreignObject>
	</svg>
</a>

<style>
	.project-thumb {
		display: block;
		text-decoration: none;

		background-image: var(--icon);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: contain;
	}

	svg {
		display: block;
		position: relative;
		z-index: -1;
		user-select: none;
	}

	svg h2 {
		font-family: var(--f-display);
		font-size: 36px;
		line-height: 1;

		transition: transform 300ms ease;
	}
	.project-thumb:hover svg h2,
	.project-thumb:focus-visible svg h2 {
		transform: translateY(-10%);
	}
</style>
