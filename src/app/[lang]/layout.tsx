import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Assistant } from "next/font/google";
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

// Hebrew display + body font (Barlow Condensed / DM Sans have no Hebrew glyphs).
// Only attached to <html> on Hebrew routes; the [lang="he"] rules in globals.css
// swap the font tokens to it. Weights cover both body (400/500) and headings
// (600/700/800).
const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-assistant",
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
  // Hebrew is RTL + Assistant font; English is LTR + the original Latin fonts.
  // The Assistant variable is added only on Hebrew so English keeps exactly its
  // original font-variable classes (byte-identical). Directional RTL spacing
  // polish is a later step.
  const fontClasses =
    lang === "he"
      ? `${barlowCondensed.variable} ${dmSans.variable} ${assistant.variable}`
      : `${barlowCondensed.variable} ${dmSans.variable}`;
  return (
    <html lang={lang} dir={lang === "he" ? "rtl" : "ltr"} className={fontClasses}>
      <body className={`${dmSans.className} bg-[#111111] text-white antialiased`}>
        <Navbar lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <ScrollAnimator />
      </body>
    </html>
  );
}
