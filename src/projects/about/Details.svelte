<script lang="ts">
	import ImageSection from "$lib/ImageSection.svelte";

	import imgPicturesA from "./about_picturesA.webp";
	import imgPicturesB from "./about_picturesB.webp";
	import imgMonogramm from "./about_monogramm.webp";

</script>

<ImageSection image={imgPicturesA} flip>
	<p>
		Due to my fundamental interest in physics and technical design, 
		my first professional experience led me to OXXID, a small design agency in Munich. 
		Already during my bachelor's degree in integrated product design, 
		I started working there, which gave me the opportunity to not only get to know essential software, 
		but could also test my skills offsite the digital world in the in-house workshop.
	</p>
</ImageSection>

<ImageSection image={imgPicturesB}>
	<p>
		My current specialty is in parametric design of technical products, 
		but I would like to further develop my other skills or even create new ones. 
		That’s why after 1,5 years at OXXID it is time for a new adventure in the industrial design universe.
	</p>
</ImageSection>

<ImageSection image={imgMonogramm} flip>
	<p>
		If I sparked your interest, please contact me by email at <a href="mailto:heidimeyer.design@gmail.com">heidimeyer.design@gmail.com</a>.
	</p>
</ImageSection>
