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
		padding-top: 2em;
		padding-bottom: 5em;
	}
</style>
