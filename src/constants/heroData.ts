export type HeroSlide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;

  theme: {
    primary: string;
    secondary: string;
  };

  image: string;

  floating: string[];

  cta: {
    label: string;
    href: string;
  };
};

export const heroData: HeroSlide[] = [
  {
    id: 1,

    title: "Premium EV Battery",

    subtitle: "Power Your Future",

    description:
      "High performance electric battery solution built for modern mobility.",

    theme: {
      primary: "#0066ff",
      secondary: "#00d4ff",
    },

    image: "/b-1.png",

    floating: ["lightning", "cell", "spark"],

    cta: {
      label: "Explore Battery",
      href: "#",
    },
  },

  {
    id: 2,

    title: "Electric Auto Rickshaw",

    subtitle: "Smart Electric Mobility",

    description: "Reliable electric vehicles designed for Bangladesh roads.",

    theme: {
      primary: "#ff7a00",
      secondary: "#ffcc00",
    },

    image: "/a1.png",

    floating: ["wheel", "light", "speed"],

    cta: {
      label: "View Vehicles",
      href: "#",
    },
  },

  {
    id: 3,

    title: "Premium Spare Parts",

    subtitle: "Original Components",

    description: "Quality parts engineered for maximum performance.",

    theme: {
      primary: "#222",
      secondary: "#555",
    },

    image: "/hero/parts.png",

    floating: ["gear", "bolt", "bearing"],

    cta: {
      label: "Explore Parts",
      href: "#",
    },
  },
];
