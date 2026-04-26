/*
  Single source of truth for 3D models.
  Add an artifact here, then it can flow through any viewer in the site.
  - `src` is the path to a .glb/.gltf in /public/models/. When null, a placeholder
    primitive shape is rendered, so the viewer always works during content prod.
  - HERO_MODELS is the pool the home-page hero randomly picks from on each load.
*/

export type Model3D = {
  id: string;
  src: string | null;
  caption: string;
  shape?: "torus" | "icosahedron" | "octahedron" | "knot";
};

export const HERO_MODELS: Model3D[] = [
  {
    id: "amphora",
    src: null,
    shape: "torus",
    caption: "Amphora · placeholder until we the model",
  },
  {
    id: "marble-statue",
    src: null,
    shape: "icosahedron",
    caption: "Marble bust · placeholder until we the model",
  },
  {
    id: "mosaic-fragment",
    src: null,
    shape: "octahedron",
    caption: "Mosaic fragment · placeholder until we the model",
  },
  {
    id: "bronze-bowl",
    src: null,
    shape: "knot",
    caption: "Bronze vessel · placeholder until we the model",
  },
];

export function pickRandomHeroModel(): Model3D {
  return HERO_MODELS[Math.floor(Math.random() * HERO_MODELS.length)];
}
