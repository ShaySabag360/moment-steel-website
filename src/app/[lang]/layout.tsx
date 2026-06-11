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
  // Hebrew is RTL, English is LTR. Visual RTL polish (flipped spacing, Assistant
  // font) is a later step; here we only set the document direction + language.
  return (
    <html lang={lang} dir={lang === "he" ? "rtl" : "ltr"} className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <body className={`${dmSans.className} bg-[#111111] text-white antialiased`}>
        <Navbar lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <ScrollAnimator />
      </body>
    </html>
  );
}
