// app/page.tsx (মেইন app ফোল্ডারের রুটে এই ফাইলটি তৈরি করুন)
import { redirect } from "next/navigation";

export default function RootPage() {
  // 🚀 ইউজার সরাসরি ডোমেইনে ঢুকলে তাকে স্বয়ংক্রিয়ভাবে /bn (বাংলা) পেজে পাঠিয়ে দেবে
  redirect("/bn");
}
