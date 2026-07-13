import WaterBattery from "@/components/battery/Battery";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function BatteriesPage({ params }: PageProps) {
  const { lang } = await params;
  const language: "en" | "bn" = lang === "bn" ? "bn" : "en";

  return <WaterBattery lang={language} />;
}
