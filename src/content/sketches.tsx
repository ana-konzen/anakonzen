export type SketchType = {
  title: string;
  year: number;
  link: string;
  img: string;
};

function getSketchUrl(path: string) {
  return `https://sketches.anakonzen.com/${path}/`;
}

export const sketches: SketchType[] = [
  {
    title: "Sorry, ____",
    year: 2025,
    link: getSketchUrl("sorry"),
    img: "sorry.png",
  },
  {
    title: "Molnar",
    year: 2024,
    link: getSketchUrl("molnar"),
    img: "molnar.png",
  },
  {
    title: "Feathers",
    year: 2024,
    link: getSketchUrl("feathers"),
    img: "feathers.png",
  },
  {
    title: "Picasso Gen",
    year: 2024,
    link: "https://ana-konzen.github.io/picasso-gen/",
    img: "picasso-gen.png",
  },
  {
    title: "Pat Steir's Waterfalls",
    year: 2024,
    link: getSketchUrl("waterfalls"),
    img: "waterfalls.png",
  },
  {
    title: "Sea Particles",
    year: 2024,
    link: getSketchUrl("sea"),
    img: "sea-particles.png",
  },
];
