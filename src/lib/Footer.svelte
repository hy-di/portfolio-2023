<script lang="ts">
	import ContentContainer from "./ContentContainer.svelte";
</script>

<footer>
	<ContentContainer>
		<slot />
	</ContentContainer>
</footer>

<style>
	footer {
		background-color: hsl(var(--c-back-h), var(--c-back-s), calc(var(--c-back-l) - 10%));
		padding: 1em 0;
	}
</style>
