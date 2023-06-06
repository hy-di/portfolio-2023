import type { ComponentType, SvelteComponentTyped } from "svelte";

import details01 from "./01/Details.svelte";
import details02 from "./02/Details.svelte";
import details03 from "./03/Details.svelte";
import detailsAbout from "./about/Details.svelte";

import icon01 from "./01/01_icon.webp";
import icon02 from "./02/02_icon.webp";
import icon03 from "./03/03_icon.webp";
import icon04 from "./04/icon.png";
import icon05 from "./05/icon.png";
import iconAbout from "./about/about_icon.webp";

import banner01 from "./01/01_banner02.webp";
import banner02 from "./02/02_banner.webp";
import banner03 from "./03/03_banner.webp";
import bannerAbout from "./about/about_banner.webp";

export type Projects = {
	[id: string]: Project;
}

export type Project = {
	id: string
	title: string
	description?: string
	icon: string
	headerImage?: string
	details?: ComponentType<SvelteComponentTyped>
}

const projects: Project[] = [{
	id: "01",
	title: "01",
	icon: icon01,
	headerImage: banner01,
	details: details01
}, {
	id: "02",
	title: "02",
	icon: icon02,	
	headerImage: banner02,
	details: details02
}, {
	id: "03",
	title: "03",
	icon: icon03,
	headerImage: banner03,
	details: details03
}, {
	id: "04",
	title: "Project Four",
	icon: icon04
}, {
	id: "05",
	title: "Project Five",
	icon: icon05
}, {
	id: "about",
	title: "About",
	icon: iconAbout,
	headerImage: bannerAbout,
	details: detailsAbout
}];

export default Object.fromEntries(projects.map(project => [project.id, project]));
