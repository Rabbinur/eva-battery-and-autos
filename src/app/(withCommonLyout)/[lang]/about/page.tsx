import AboutUs from "@/components/about/AboutUs";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const language: "en" | "bn" = lang === "bn" ? "bn" : "en";

  return <AboutUs lang={language} />;
}
