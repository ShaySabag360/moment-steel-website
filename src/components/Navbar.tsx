"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary, type Lang } from "@/content";
import { localizeHref, getAlternateLocaleHref } from "@/lib/localizeHref";

export default function Navbar({ lang }: { lang: Lang }) {
  const { nav } = getDictionary(lang);
  const pathname = usePathname();
  const otherLang: Lang = lang === "he" ? "en" : "he";
  const altHref = getAlternateLocaleHref(pathname, lang);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href={localizeHref("/", lang)}>
          <Image
            src="/logo/moment-white.svg"
            alt={nav.logoAlt}
            width={160}
            height={43}
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={localizeHref(link.href, lang)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={altHref}
              hrefLang={otherLang}
              aria-label={nav.switchLangAria}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <span lang={otherLang}>{nav.switchLang}</span>
            </Link>
          </li>
          <li>
            <Link
              href={localizeHref("/contact", lang)}
              className="bg-[#fd008d] text-white text-sm font-semibold px-5 py-2.5 uppercase tracking-widest hover:bg-[#e0007c] transition-colors"
            >
              {nav.cta}
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-white p-2 flex flex-col items-center justify-center gap-1.5 min-h-11 min-w-11"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={nav.toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black/95 px-6 py-4 border-t border-[#2d2d2d]">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={localizeHref(link.href, lang)}
              className="block py-3 text-gray-300 hover:text-white border-b border-[#2d2d2d] uppercase tracking-widest text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={altHref}
            hrefLang={otherLang}
            aria-label={nav.switchLangAria}
            className="block py-3 text-gray-300 hover:text-white border-b border-[#2d2d2d] text-sm"
            onClick={() => setMenuOpen(false)}
          >
            <span lang={otherLang}>{nav.switchLang}</span>
          </Link>
          <Link
            href={localizeHref("/contact", lang)}
            className="mt-4 block text-center bg-[#fd008d] text-white text-sm font-semibold px-5 py-3 uppercase tracking-widest"
            onClick={() => setMenuOpen(false)}
          >
            {nav.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
