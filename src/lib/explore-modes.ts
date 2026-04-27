export type ExploreMode = {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  accent: string;
};

export const EXPLORE_MODES: ExploreMode[] = [
  {
    id: "guided-tour",
    number: "01",
    category: "Guided Tour",
    title: "Explore the Museum",
    description:
      "Walk through the galleries in sequence, from the island's first stone villages to the grandeur of Roman Nea Pafos. Follow the curators' journey.",
    cta: "Start the Tour",
    href: "/tour",
    accent: "#7da97a",
  },
  {
    id: "timeline",
    number: "02",
    category: "Timeline",
    title: "Explore by Era",
    description:
      "Choose a historical period and dive deep, see how the colours, artefacts, and stories of each age defined life in ancient Cyprus.",
    cta: "Open Timeline",
    href: "/timeline",
    accent: "#d57800",
  },
  {
    id: "narratives",
    number: "03",
    category: "Narratives",
    title: "Explore by Stories",
    description:
      "Day in the Life, discover how people lived, worked, traded, and worshipped. Thematic stories that bring ancient Cyprus to life.",
    cta: "Read Stories",
    href: "/stories",
    accent: "#5b8fc4",
  },
];
