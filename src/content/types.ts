// Site copy dictionary types.
//
// P1.1 pilot scope: only `nav` and `footer` are modeled here. The remaining
// sections (hero, stats, services, projects, etc.) are added in later P1.1
// steps. English is the source of truth; a Hebrew dictionary with the exact
// same shape is introduced in a later phase, at which point this interface
// guarantees both locales stay in sync (a missing key fails the build).

export type Lang = "en" | "he";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavDictionary {
  /** Shared primary navigation links (used by both Navbar and Footer). */
  links: NavLink[];
  /** Primary call-to-action button label. */
  cta: string;
  /** Logo image alt text. */
  logoAlt: string;
  /** Mobile menu toggle button aria-label. */
  toggleMenu: string;
}

export interface FooterDictionary {
  /** Logo image alt text. */
  logoAlt: string;
  /** Short description under the logo. */
  tagline: string;
  /** "Navigation" column heading. */
  navHeading: string;
  /** "Contact" column heading. */
  contactHeading: string;
  /** Office address line. */
  address: string;
  /** WhatsApp link label. */
  whatsapp: string;
  /** Text rendered after "© {year} " in the copyright line. */
  copyright: string;
}

export interface Dictionary {
  nav: NavDictionary;
  footer: FooterDictionary;
}
