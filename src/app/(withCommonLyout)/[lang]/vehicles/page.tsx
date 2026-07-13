import RickshawVariants from "@/components/rickshaw/RickshawVariants";

interface PageProps {
  params: Promise<{ lang: "en" | "bn" }>;
}

export default async function VehiclesPage({ params }: PageProps) {
  const { lang } = await params;

  return <RickshawVariants lang={lang} />;
}
