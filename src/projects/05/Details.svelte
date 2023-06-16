<script lang="ts">
	import ImageSection from "$lib/ImageSection.svelte";

	import imgTechnic from "./05_technic.webp";
	import imgSketches from "./05_sketches.webp";
	import imgDraftImpressions from "./05_draftimpressions.webp";
	import imgPositionOverview from "./05_positionoverview.webp";
</script>

<ImageSection image={imgSketches} flip>
</ImageSection>

<ImageSection image={imgDraftImpressions}>
	<p>
		This display housing can be positioned flexibly, 
		making it easily integratable into any workplace. 
		For this purpose, the technical components first had to be positioned accordingly 
		in order to design an enclosure that would allow the desired angles.
	</p>
</ImageSection>

<ImageSection image={imgTechnic} flip>
	<p>
		In this project cost-efficient production was one of the biggest challenges, 
		alongside minimizing the use of materials and parts.
	</p>
	</ImageSection>

<ImageSection image={imgPositionOverview}>
</ImageSection>
