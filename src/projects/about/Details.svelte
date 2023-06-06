<script lang="ts">
	import ImageSection from "$lib/ImageSection.svelte";

	import imgPicturesA from "./about_picturesA.webp";
	import imgPicturesB from "./about_picturesB.webp";

</script>

<ImageSection image={imgPicturesA} flip>
	<p>
		I completed my bachelor's degree at the beginning of the year and am looking forward to new professional experiences.
	</p>
</ImageSection>

<ImageSection image={imgPicturesB}>
	<p>
		In my free time I love to travel around the world and gain new experiences.
	</p>
	<p>
		If I sparked your interest, contact me <a href="mailto:heidimeyer256@gmail.com">here</a>.
	</p>
</ImageSection>

