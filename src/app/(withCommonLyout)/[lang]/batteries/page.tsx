import WaterBattery from "@/components/battery/Battery";

interface PageProps {
  params: Promise<{ lang: "en" | "bn" }>;
}

export default async function BatteriesPage({ params }: PageProps) {
  const { lang } = await params;

  return <WaterBattery lang={lang} />;
}
