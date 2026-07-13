import AboutUs from "@/components/about/AboutUs";

interface PageProps {
  params: Promise<{ lang: "en" | "bn" }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;

  return <AboutUs lang={lang} />;
}
