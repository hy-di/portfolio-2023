import { writable, derived } from "svelte/store";

import projects from "./projects";

export const activeProjectID = writable<string | undefined>(undefined);
export const activeProject = derived(
	activeProjectID,
	$activeProjectID => $activeProjectID ? projects[$activeProjectID] : undefined
);
