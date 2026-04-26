/*
  Single source of truth for all images in the site.
  Add new images here, then import the registry from components.
  To swap an image, change it once here.
*/

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const IMAGES = {
  cyprusEmblem: {
    src: "/images/cyprus-emblem.svg",
    alt: "Republic of Cyprus emblem",
    width: 28,
    height: 36,
  },
  departmentOfAntiquities: {
    src: "/images/department-of-antiquities.svg",
    alt: "Department of Antiquities monogram",
    width: 36,
    height: 36,
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof IMAGES;
