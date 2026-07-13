import ContactUs from "@/components/contact-us/ContactUs";

interface PageProps {
  params: Promise<{ lang: "en" | "bn" }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;

  return <ContactUs lang={lang} />;
}
