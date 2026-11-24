import type { ProjectItem } from "@/content/types";

/**
 * Photos per project, keyed by a stable project id. The dictionaries'
 * `projects.items[].id` point here, so reordering or deleting a project in the
 * copy can never attach another project's photos. The first photo is the
 * project's lead image (Projects page gallery + Home featured card).
 */
export const PROJECT_IMAGES = {
  "givon-school": [
    "/images/givon-school/givon-1.jpg",
    "/images/givon-school/givon-2.jpg",
    "/images/givon-school/givon-3.jpg",
    "/images/givon-school/givon-4.jpg",
  ],
  "tel-hashomer": [
    "/images/tel-hashomer/tel-hashomer-1.jpg",
    "/images/tel-hashomer/tel-hashomer-2.jpg",
  ],
  "wall-support": [
    "/images/wall-support/wall-2.jpg",
    "/images/wall-support/wall-1.jpg",
  ],
  "migrash-11": [
    "/images/migrash-11/migrash-1.jpg",
    "/images/migrash-11/migrash-2.jpg",
  ],
  "composite-spiral": [
    "/images/composite-spiral/spiral-1.jpg",
    "/images/composite-spiral/spiral-2.jpg",
    "/images/composite-spiral/spiral-3.jpg",
  ],
  "azrieli-columns": [
    "/images/azrieli-columns/azrieli-1.jpg",
    "/images/azrieli-columns/azrieli-2.jpg",
  ],
} satisfies Record<string, string[]>;

export type ProjectId = keyof typeof PROJECT_IMAGES;

/** Home page "Featured Projects", in display order. */
export const FEATURED_PROJECT_IDS: ProjectId[] = [
  "givon-school",
  "composite-spiral",
  "azrieli-columns",
];

/** Look up a project's copy by id; fails the build if the dictionary lacks it. */
export function findProject(items: ProjectItem[], id: ProjectId): ProjectItem {
  const item = items.find((project) => project.id === id);
  if (!item) throw new Error(`Project "${id}" is missing from the dictionary.`);
  return item;
}
