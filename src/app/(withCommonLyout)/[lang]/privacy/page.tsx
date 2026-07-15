import CommonBanner from "@/components/Common/CommonBanner";
import Link from "next/link";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;
  const isBn = lang === "bn";

  const badge = isBn ? "প্রাইভেসি পলিসি" : "Privacy Policy";
  const title = isBn ? "আমাদের প্রাইভেসি পলিসি" : "Our Privacy Policy";
  const subtitle = isBn 
    ? "ইভা ব্যাটারি অ্যান্ড অটোস-এ আপনার তথ্যের নিরাপত্তা ও সুরক্ষার বিবরণ।" 
    : "Details of how we secure and respect your personal information at EVA Battery & Autos.";

  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-900 pb-20">
      <CommonBanner 
        lang={lang === "bn" ? "bn" : "en"} 
        badge={badge} 
        title={title} 
        subtitle={subtitle} 
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 mt-16 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.03)] space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
        <h2 className="text-xl font-bold text-slate-900">{isBn ? "১. তথ্য সংগ্রহ ও ব্যবহার" : "1. Information Collection & Use"}</h2>
        <p>
          {isBn 
            ? "আমরা যখন আমাদের পণ্য বা সেবা উন্নত করতে এবং যোগাযোগ সহজ করতে আপনার নাম, মোবাইল নম্বর এবং ঠিকানা সংগ্রহ করি, তখন আপনার তথ্যের সর্বোচ্চ নিরাপত্তা নিশ্চিত করা হয়।"
            : "We collect basic contact information (such as name, mobile number, and address) solely to fulfill orders, facilitate callback requests, and improve our customer support experience."}
        </p>
        
        <h2 className="text-xl font-bold text-slate-900">{isBn ? "২. তথ্য সুরক্ষা" : "2. Information Security"}</h2>
        <p>
          {isBn 
            ? "আপনার ব্যক্তিগত তথ্যের নিরাপত্তা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। আমরা যেকোনো অননুমোদিত অ্যাক্সেস বা প্রকাশ থেকে আপনার তথ্য রক্ষা করতে উপযুক্ত নিরাপত্তা ব্যবস্থা গ্রহণ করি।"
            : "Your personal data is encrypted and saved securely. We enforce strict internal measures to prevent unauthorized access, alteration, or disclosure."}
        </p>

        <h2 className="text-xl font-bold text-slate-900">{isBn ? "৩. যোগাযোগ করুন" : "3. Contact Us"}</h2>
        <p>
          {isBn 
            ? "আমাদের প্রাইভেসি পলিসি সম্পর্কে আপনার কোনো প্রশ্ন থাকলে সরাসরি আমাদের যোগাযোগ পেজে মেসেজ পাঠান বা ফোনে যোগাযোগ করুন।"
            : "If you have any questions about our privacy policies, please reach out to us via our Contact Us page or call us directly."}
        </p>
        
        <div className="pt-4 text-center">
          <Link 
            href={`/${lang}`}
            className="inline-flex items-center justify-center space-x-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
          >
            {isBn ? "হোমে ফিরে যান" : "Back to Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
