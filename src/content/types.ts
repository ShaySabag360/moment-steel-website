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
  /** Visible label on the language switcher (the OTHER locale's endonym: HE shows "EN", EN shows "עברית"). */
  switchLang: string;
  /** Accessible label for the language switcher, in the current page's language. */
  switchLangAria: string;
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
  /** Inline label before Shai's phone number in the contact column (e.g. "Shai:"). */
  contactShai: string;
  /** Inline label before Yoel's phone number in the contact column (e.g. "Yoel:"). */
  contactYoel: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface FeaturedItem {
  /** Project card title. */
  title: string;
  /** Pink category/label shown above the title (e.g. "Complex Geometry"). */
  location: string;
}

/**
 * A testimonial quote split into segments so the bold emphasis (rendered as
 * <strong>) is preserved without storing JSX in the dictionary:
 * `“{prefix}<strong>{bold}</strong>{suffix}”`.
 */
export interface TestimonialItem {
  prefix: string;
  bold: string;
  suffix: string;
  name: string;
  company: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface HomeDictionary {
  hero: {
    /** Three headline lines separated by <br/>. */
    headline: [string, string, string];
    tagline: string;
    ctaContact: string;
    ctaProjects: string;
  };
  stats: StatItem[];
  services: {
    eyebrow: string;
    heading: string;
    items: ServiceItem[];
  };
  featured: {
    eyebrow: string;
    heading: string;
    viewAll: string;
    viewAllMobile: string;
    items: FeaturedItem[];
  };
  clients: {
    eyebrow: string;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    items: TestimonialItem[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: FaqItem[];
  };
  cta: {
    heading: string;
    body: string;
    call: string;
    whatsapp: string;
  };
}

export interface DifferentiatorItem {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  tags: string[];
  /** Avatar initials (e.g. "SS"); shown on the card, kept across locales. */
  initials: string;
}

export interface AboutDictionary {
  hero: {
    eyebrow: string;
    /** Three headline lines; line3 is the pink-accented line. */
    headline: { line1: string; line2: string; line3: string };
    paragraph: string;
  };
  story: {
    eyebrow: string;
    heading: string;
    /** Paragraph 1 is always visible; 2 and 3 sit inside MobileReveal. */
    paragraphs: [string, string, string];
    tags: string[];
  };
  whyChooseUs: {
    eyebrow: string;
    heading: string;
    items: DifferentiatorItem[];
  };
  team: {
    eyebrow: string;
    heading: string;
    subhead: string;
    members: TeamMember[];
  };
  cta: {
    heading: string;
    body: string;
    primary: string;
    secondary: string;
  };
}

export interface ProjectItem {
  title: string;
  location: string;
  category: string;
  description: string;
}

export interface ProjectsDictionary {
  header: {
    eyebrow: string;
    heading: string;
    intro: string;
  };
  items: ProjectItem[];
  cta: {
    heading: string;
    body: string;
    primary: string;
    whatsapp: string;
  };
}

export interface ContactPerson {
  /** Avatar initials (e.g. "SS"). */
  initials: string;
  name: string;
  role: string;
  /** Displayed phone number (the tel: href stays in the page). */
  phone: string;
  /** Displayed email address (the mailto: href stays in the page). */
  email: string;
}

export interface ContactFormDictionary {
  nameLabel: string;
  namePlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
  helper: string;
}

export interface ContactDictionary {
  header: {
    eyebrow: string;
    headline: { line1: string; line2: string };
    intro: string;
  };
  directHeading: string;
  people: ContactPerson[];
  whatsappHeading: string;
  whatsappLink: string;
  officeHeading: string;
  address: { line1: string; line2: string };
  note: string;
  form: ContactFormDictionary;
}

/** Shared UI control labels (progressive-disclosure toggles, etc.). */
export interface UiDictionary {
  /** MobileReveal expand label on the default reveals (services, story, team bios). */
  readMore: string;
  /** MobileReveal collapse label on the default reveals. */
  showLess: string;
  /** Projects description expand label. */
  viewDetails: string;
  /** Projects description collapse label. */
  hideDetails: string;
}

export interface Dictionary {
  nav: NavDictionary;
  footer: FooterDictionary;
  ui: UiDictionary;
  home: HomeDictionary;
  about: AboutDictionary;
  projects: ProjectsDictionary;
  contact: ContactDictionary;
}
