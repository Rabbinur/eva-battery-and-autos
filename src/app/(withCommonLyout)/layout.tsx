import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* হেডারকে স্লাইডারের উপরে ভাসিয়ে দেওয়ার জন্য absolute পজিশন */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* মেইন কন্টেন্ট */}
      <div className="flex-1">{children}</div>

      <Footer />
    </div>
  );
};

export default layout;
