<script lang="ts">
	import ImageSection from "$lib/ImageSection.svelte";

	import imgSetOverview from "./02_setoverview.webp";
	import imgPrototypesA from "./02_prototypesA.webp";
	import imgPrototypesB from "./02_prototypesB.webp";
	import imgSketchesA from "./02_sketchesA.webp";
	import imgSketchesB from "./02_sketchesB.webp";
	import imgVolumeOverview from "./02_volumeoverview.webp";
</script>

<ImageSection image={imgSketchesA} flip verticalAlign="end">
	<img src={imgSketchesB} alt="">	
</ImageSection>

<ImageSection image={imgPrototypesB} verticalAlign="start">
	<img src={imgPrototypesA} alt="">	
</ImageSection>

<ImageSection image={imgVolumeOverview} flip>
	<p>
		SKORE represents a product family, which is visually recognizable and cohesive in itself. This set focuses on the functions and handling.
	</p>
</ImageSection>

<ImageSection image={imgSetOverview}>
	<p>
		The products are aimed at people with little space and a small budget, who value functional design.
	</p>
</ImageSection>
