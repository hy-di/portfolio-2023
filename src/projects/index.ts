import type { ComponentType, SvelteComponentTyped } from "svelte";

import details01 from "./01/Details.svelte";
import details02 from "./02/Details.svelte";
import details03 from "./03/Details.svelte";
import detailsAbout from "./about/Details.svelte";

import icon01 from "./01/01_icon.webp";
import icon02 from "./02/02_icon.webp";
import icon03 from "./03/03_icon.webp";
import iconAbout from "./about/about_icon.webp";

import banner01 from "./01/01_banner02.webp";
import banner02 from "./02/02_banner.webp";
import banner03 from "./03/03_banner.webp";
import bannerAbout from "./about/about_banner.webp";

import logo01 from "./01/01_logo.svelte";
import logo02 from "./02/02_logo.svelte";
import logo03 from "./03/03_logo.svelte";

export type Projects = {
	[id: string]: Project;
}

export type Project = {
	id: string
	icon: string
	title?: string
	logo?: ComponentType<SvelteComponentTyped>,
	headerImage?: string
	details?: ComponentType<SvelteComponentTyped>
}

const projects: Project[] = [{
	id: "01",
	icon: icon01,
	headerImage: banner01,
	title: "cAfy",
	logo: logo01,
	details: details01
}, {
	id: "02",
	title: "SKORE",
	icon: icon02,
	headerImage: banner02,
	logo: logo02,
	details: details02
}, {
	id: "03",
	title: "doup",
	icon: icon03,
	headerImage: banner03,
	logo: logo03,
	details: details03
}, {
	id: "about",
	title: "About Me",
	icon: iconAbout,
	headerImage: bannerAbout,
	details: detailsAbout
}];

export default Object.fromEntries(projects.map(project => [project.id, project]));
