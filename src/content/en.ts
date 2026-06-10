import type { Dictionary } from "./types";

// English copy — the source of truth. Strings here are relocated verbatim
// from the components (P1.1 pilot: Navbar + Footer). Do not reword; this must
// render byte-identical to the pre-extraction English site.

export const en: Dictionary = {
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
    cta: "Get a Quote",
    logoAlt: "Moment Steel",
    toggleMenu: "Toggle menu",
  },
  footer: {
    logoAlt: "Moment Steel",
    tagline:
      "End-to-End Structural Steel Solutions — from engineering and detailing to fabrication management and site erection.",
    navHeading: "Navigation",
    contactHeading: "Contact",
    address: "Yoni Netanyahu 8, Petach Tikva",
    whatsapp: "WhatsApp →",
    copyright: "Moment Steel. All rights reserved.",
  },
};
