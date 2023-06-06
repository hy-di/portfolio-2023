<script lang="ts">
	import ImageSection from "$lib/ImageSection.svelte";

	import imgPicturesA from "./about_picturesA.webp";
	import imgPicturesB from "./about_picturesB.webp";

</script>

<ImageSection image={imgPicturesA} flip>
	<p>
		Hi, my name is Heidi and I completed my bachelor's degree at the beginning of the year. 
		Currently I am looking forward to make new professional experiences in and around Munich.
	</p>
	<p>
		My current specialty is in parametric design of technical products, 
		but I would like to further develop my other skills or even create new ones.
	</p>
</ImageSection>

<ImageSection image={imgPicturesB}>
	<p>
		In my free time I love to travel around the world and gain new knowledge. I am a team player, 
		so I love being around people and having fun.	</p>
	<p>
		If I sparked your interest, please contact me by email at <a href="mailto:heidimeyer256@gmail.com">heidimeyer256@gmail.com</a>.
	</p>
</ImageSection>

