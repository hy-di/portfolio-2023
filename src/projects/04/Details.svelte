<script lang="ts">
	import ImageSection from "$lib/ImageSection.svelte";

	import imgTechnic from "./04_technic.webp";
	import imgSketches from "./04_sketches.webp";
	import imgPrototyps from "./04_prototyps.webp";
	import imgOverviewDraft from "./04_overviewdraft.webp";
	import imgOverviewFinal from "./04_overviewfinal.webp";
</script>

<ImageSection image={imgSketches} flip>
	<p>
		This Bluetooth adapter was my first customer project at the beginning of my career. 
		Here I was tasked with designing and supervising the implementation of the housing. 
	</p>
</ImageSection>

<ImageSection image={imgTechnic}>
	<p>
		The challenge was to design a compact housing that completely encloses the technical components 
		while still ensuring the operability and functionality of the knurled screws. 
	</p>
</ImageSection>

<ImageSection image={imgPrototyps} flip verticalAlign="end">
	<img src={imgOverviewDraft} alt="">	
</ImageSection>

<ImageSection image={imgOverviewFinal}>
</ImageSection>
