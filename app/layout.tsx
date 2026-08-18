import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eden Garden Day Spa — প্রশান্তির ছোঁয়ায় নিজেকে নতুন করে ফিরে পান",
  description: "ঢাকায় প্রিমিয়াম ও প্রফেশনাল ম্যাসাজ থেরাপি, অ্যারোমা থেরাপি, স্পা ও বিউটি কেয়ার সার্ভিস। শান্ত পরিবেশ, প্রশিক্ষিত থেরাপিস্ট ও ১০০% গোপনীয়তা। বুকিং করুন আজই।",
  keywords: ["spa in dhaka", "massage in dhaka", "body massage dhaka", "spa bangladesh", "eden garden spa", "massage service dhaka"],
  openGraph: {
    title: "Eden Garden Day Spa — প্রশান্তির ছোঁয়ায় নিজেকে নতুন করে ফিরে পান",
    description: "ঢাকায় প্রিমিয়াম ও প্রফেশনাল ম্যাসাজ থেরাপি, অ্যারোমা থেরাপি, স্পা ও বিউটি কেয়ার সার্ভিস।",
    type: "website",
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
