export type HeroSlide = {
  id: number;

  type: "battery" | "rickshaw" | "parts";

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
