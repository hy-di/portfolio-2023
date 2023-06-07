<script lang="ts">
	import ImageSection from "$lib/ImageSection.svelte";

	import imgAppAndSensor from "./01_appandsensor.webp";
	import imgPhotomodels from "./01_photomodels.webp";
	import imgPrototypesA from "./01_prototypesA.webp";
	import imgPrototypesB from "./01_prototypesB.webp";
	import imgSketchesA from "./01_sketchesA.webp";
	import imgSketchesB from "./01_sketchesB.webp";
	import imgWatchAndStand from "./01_watchandstand.webp";
</script>

<ImageSection image={imgSketchesA} flip verticalAlign="end">
	<img src={imgSketchesB} alt="">	
</ImageSection>

<ImageSection image={imgPrototypesA} verticalAlign="start">
	<img src={imgPrototypesB} alt="">	
</ImageSection>

<ImageSection image={imgAppAndSensor} flip>
	<p>
		cAfy is a health monitoring system for everyone. 
		It is based on a three-level system that takes into account all persons with or without care needs, as well as their relatives.
	</p>
</ImageSection>

<ImageSection image={imgWatchAndStand}>
	<p>
		It is a system that not only reacts quickly in emergencies, but also monitors the physical and mental health of the individual at all times. 
		cAfy is timeless, soft and universally designed to provide comfort and security.
	</p>
</ImageSection>

<ImageSection image={imgPhotomodels} flip>
	<p>
		The product catalog to date consists of a smartwatch with charging stations, a room sensor and an app to view the collected data.
	</p>
</ImageSection>
