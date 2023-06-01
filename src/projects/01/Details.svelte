<script lang="ts">
	import ImageSection from "$lib/ImageSection.svelte";

	import overviewAImg from "./overview-a.jpg";
	import overviewBImg from "./overview-b.jpg";
	import step1Img from "./step-1.png";
	import step2Img from "./step-2.jpg";
	import step3Img from "./step-3.jpg";
</script>

<ImageSection image={overviewAImg} flip>
	<h3>Overview</h3>
	<p>
		Technology offers a way to address the increasing desire of older people to live at home longer,
		the shortage of caregivers and the growing care needs of the baby boomer generation.
	</p>
	<p>
		To address these challenges, an emergency assistance system is being developed that provides
		security for individuals and their loved ones and is targeted at people of all ages who need
		care.
	</p>
</ImageSection>
<ImageSection image={overviewBImg}>
	<p>
		The design criteria of the system are identified through empirical studies considering existing
		approaches and privacy constraints.
	</p>
	<p>
		This leads to the development of a product family called cAfy, which consists of a smartphone
		application, a room sensor, and a smartwatch, each of which has been visually designed.
	</p>
</ImageSection>
<ImageSection image={step1Img} flip>
	<h3>Step 1:</h3>
	<p>
		Sketching to figure out the basic volume
	</p>
</ImageSection>
<ImageSection image={step2Img}>
	<h3>Step 2:</h3>
	<p>
		Prototyping and modeling
	</p>
</ImageSection>
<ImageSection image={step3Img} flip>
	<h3>Step 3:</h3>
	<p>
		Making models for testing
	</p>
</ImageSection>
