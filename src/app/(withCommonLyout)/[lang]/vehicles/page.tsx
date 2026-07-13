import RickshawVariants from "@/components/rickshaw/RickshawVariants";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function VehiclesPage({ params }: PageProps) {
  const { lang } = await params;
  const language: "en" | "bn" = lang === "bn" ? "bn" : "en";

  return <RickshawVariants lang={language} />;
}
