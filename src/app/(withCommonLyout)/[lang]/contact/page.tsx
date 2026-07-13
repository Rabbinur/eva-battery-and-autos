import ContactUs from "@/components/contact-us/ContactUs";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  const language: "en" | "bn" = lang === "bn" ? "bn" : "en";

  return <ContactUs lang={language} />;
}
