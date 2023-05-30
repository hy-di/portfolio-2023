import type { ComponentType, SvelteComponentTyped } from "svelte";

import details01 from "./01/Details.svelte";

import icon01 from "./01/icon.png";
import icon02 from "./02/icon.png";
import icon03 from "./03/icon.png";
import icon04 from "./04/icon.png";
import icon05 from "./05/icon.png";
import iconAbout from "./about/icon.png";

import header01 from "./01/header.jpg";

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
	title: "Home Monitoring System",
	description: "Design of a\nhome monitoring-system",
	icon: icon01,
	headerImage: header01,
	details: details01
}, {
	id: "02",
	title: "Project Two",
	icon: icon02
}, {
	id: "03",
	title: "Project Three",
	icon: icon03
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
	title: "About Me",
	icon: iconAbout
}];

export default projects;
