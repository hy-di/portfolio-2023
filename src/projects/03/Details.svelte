<script lang="ts">
	import ImageSection from "$lib/ImageSection.svelte";

	import imgModelMakingA from "./03_modelmakingA.webp";
	import imgModelMakingB from "./03_modelmakingB.webp";
	import imgTechnicalDrawing from "./03_technicaldrawing.webp";
	import imgSketches from "./03_sketches.webp";
	import imgPhotoModelsA from "./03_photomodelsA.webp";
	import imgPhotoModelsB from "./03_photomodelsB.webp";
	import imgModelMakingC from "./03_modelmakingC.webp";
</script>

<ImageSection image={imgModelMakingA} flip verticalAlign="end">
	<img src={imgModelMakingC} alt="">	
</ImageSection>

<ImageSection image={imgModelMakingB} verticalAlign="start">
	<img src={imgSketches} alt="">	
</ImageSection>

<ImageSection image={imgPhotoModelsA} flip verticalAlign="end">
	<img src={imgTechnicalDrawing} alt="">	
</ImageSection>

<ImageSection image={imgPhotoModelsB}>
	<p>
		Doup shows an alarm clock, which was created from a model building project. 
		That also functions as a radio and night light. This extremely round design is intended to emphasize the user experience.
	</p>
</ImageSection>
