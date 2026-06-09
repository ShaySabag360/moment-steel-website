import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/logo/moment-white.svg"
              alt="Moment Steel"
              width={160}
              height={43}
              className="mb-5"
            />
            <p className="text-gray-400 text-base leading-relaxed">
              End-to-End Structural Steel Solutions — from engineering and
              detailing to fabrication management and site erection.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold uppercase tracking-widest text-sm mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
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
              Contact
            </h3>
            <ul className="space-y-3 text-gray-400 text-base">
              <li>Yoni Netanyahu 8, Petach Tikva</li>
              <li>
                <a href="tel:0508464851" className="hover:text-white transition-colors">
                  Shai: 050-846-4851
                </a>
                {" · "}
                <a href="mailto:Shay@moment-steel.com" className="hover:text-white transition-colors">
                  Shay@moment-steel.com
                </a>
              </li>
              <li>
                <a href="tel:0545367242" className="hover:text-white transition-colors">
                  Yoel: 054-536-7242
                </a>
                {" · "}
                <a href="mailto:Yoel@moment-steel.com" className="hover:text-white transition-colors">
                  Yoel@moment-steel.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/972545367242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fd008d] hover:text-[#e0007c] transition-colors font-medium"
                >
                  WhatsApp →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2d2d2d] text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Moment Steel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
