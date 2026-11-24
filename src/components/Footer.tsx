import Image from "next/image";
import Link from "next/link";
import { getDictionary, type Lang } from "@/content";
import { CONTACTS, WHATSAPP_URL, mailtoHref, telHref } from "@/lib/contact";
import { localizeHref } from "@/lib/localizeHref";

export default function Footer({ lang }: { lang: Lang }) {
  const { nav, footer } = getDictionary(lang);
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2d2d2d]">
      {/* Extra bottom room below md so the floating WhatsApp button never covers the last line. */}
      <div className="max-w-7xl mx-auto px-6 py-12 max-md:pb-28 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/logo/moment-white-pink-e.svg"
              alt={footer.logoAlt}
              width={160}
              height={43}
              className="mb-5"
            />
            <p className="text-gray-400 text-base leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold uppercase tracking-widest text-sm mb-5">
              {footer.navHeading}
            </h3>
            <ul className="space-y-3">
              {nav.links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localizeHref(item.href, lang)}
                    className="text-gray-400 hover:text-white text-base transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold uppercase tracking-widest text-sm mb-5">
              {footer.contactHeading}
            </h3>
            <ul className="space-y-3 text-gray-400 text-base">
              <li>{footer.address}</li>
              <li>
                <a href={telHref(CONTACTS.shay.phone)} className="hover:text-white transition-colors">
                  {footer.contactShai} <bdi>{CONTACTS.shay.phone}</bdi>
                </a>
                {" · "}
                <a href={mailtoHref(CONTACTS.shay.email)} className="hover:text-white transition-colors">
                  {CONTACTS.shay.email}
                </a>
              </li>
              <li>
                <a href={telHref(CONTACTS.yoel.phone)} className="hover:text-white transition-colors">
                  {footer.contactYoel} <bdi>{CONTACTS.yoel.phone}</bdi>
                </a>
                {" · "}
                <a href={mailtoHref(CONTACTS.yoel.email)} className="hover:text-white transition-colors">
                  {CONTACTS.yoel.email}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fd008d] hover:text-[#e0007c] transition-colors font-medium"
                >
                  {footer.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2d2d2d] text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
