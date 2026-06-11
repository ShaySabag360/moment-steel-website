import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import type { Lang } from "@/content";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Moment Steel — End-to-End Steel Solutions",
  description:
    "Licensed structural engineering, shop drawings, 3D laser scanning, detailing, fabrication management, and site erection. Edge to Edge Steel Solutions.",
};

// Both locales are prerendered; any other [lang] value 404s.
export function generateStaticParams() {
  return [{ lang: "he" }, { lang: "en" }];
}

export const dynamicParams = false;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const lang = (await params).lang as Lang;
  // P1.2-c1: <html> stays hard-coded en/ltr for the cleanest English parity
  // proof. Real lang/dir wiring (incl. dir="rtl" for Hebrew) lands in the next
  // step alongside getDictionary(lang). `lang` is used here only to localize
  // the chrome links (Navbar/Footer): English -> /en/*, Hebrew -> root.
  return (
    <html lang="en" dir="ltr" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <body className={`${dmSans.className} bg-[#111111] text-white antialiased`}>
        <Navbar lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <ScrollAnimator />
      </body>
    </html>
  );
}
