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
  home: {
    hero: {
      headline: ["Steel Engineering.", "Fabrication Control.", "Site Execution."],
      tagline: "Every project reaches its moment of truth, this is our moment.",
      ctaContact: "Get in Touch",
      ctaProjects: "View Projects",
    },
    stats: [
      { value: "100%", label: "In-House Engineering" },
      { value: "50+", label: "Projects Delivered" },
      { value: "15+", label: "Years Combined Experience" },
    ],
    services: {
      eyebrow: "What We Do",
      heading: "End-to-End Control for Structural Steel Projects",
      items: [
        {
          title: "Structural Design",
          description:
            "Structural engineering for steel projects, from member sizing to connection design. We use advanced engineering software to select the right calculation approach for each structural system.",
        },
        {
          title: "Shop Drawings & Detailing",
          description:
            "Fabrication-ready shop drawings and 3D models produced with advanced detailing software. We turn complex steel elements into clear, buildable information for the workshop.",
        },
        {
          title: "3D Laser Scanning",
          description:
            "Before steel goes into production, we bring the real site conditions into the model. Point cloud data captures verified as-built geometry, helping components arrive ready to fit — not waiting for field fixes.",
        },
        {
          title: "Fabrication Management",
          description:
            "We coordinate production with trusted fabrication partners in Israel and overseas, tracking quality, schedule, documentation and delivery. so fabricated steel arrives documented, coordinated and ready for erection.",
        },
        {
          title: "Site Erection",
          description:
            "We execute steel erection with a planned installation sequence, in-house survey tools and continuous alignment control — from mobilization to final bolt torque. With in-house survey capability, we verify alignment throughout the erection process — not only at final inspection.",
        },
      ],
    },
    featured: {
      eyebrow: "Our Work",
      heading: "Featured Projects",
      viewAll: "View All",
      viewAllMobile: "View All Projects →",
      items: [
        { title: "BarLev Center", location: "Commercial" },
        { title: "Composite Column Spiral", location: "Complex Geometry" },
        { title: "Azrieli Columns Support", location: "Structural Support" },
      ],
    },
    clients: {
      eyebrow: "Trusted By",
    },
    testimonials: {
      eyebrow: "What Clients Say",
      heading: "Trusted by Engineers & Contractors",
      items: [
        {
          prefix: "Working with Moment gives you confidence — ",
          bold: "solid engineering, quality execution, and results that hold up over time.",
          suffix: "",
          name: "Yaakov Livni",
          company: "Livni Engineers",
        },
        {
          prefix:
            "Moment combines strong engineering expertise with meticulous execution and ",
          bold: "reliability at every stage of the steel project.",
          suffix: "",
          name: "Ben Shogel",
          company: "Shikun & Binui",
        },
        {
          prefix: "Excellent partners to work with. ",
          bold: "High-quality engineering, execution and erection",
          suffix: " — and outstanding coordination across all project stakeholders.",
          name: "Daniel Parsha",
          company: "David Engineers",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Common Questions",
      items: [
        {
          q: "What makes Moment Steel different?",
          a: "One accountable team from structural calculation to final erection. Instead of managing separate designers, detailers, fabricators and installers, clients work with one technical partner responsible for the full steel chain.",
        },
        {
          q: "Do you perform 3D laser scanning on site?",
          a: "Yes. Our in-house survey team performs 3D laser scanning and brings verified site conditions into the model. This helps us fabricate steel components that account for real site deviations and reduces delays caused by concrete tolerances or changing field conditions.",
        },
        {
          q: "Can you work with ready drawings and tight timelines?",
          a: "Yes. Moment Steel is built to enter projects quickly, even when drawings already exist and the schedule is tight. Our lean structure allows fast engineering and detailing response without the overhead of larger firms.",
        },
        {
          q: "What project sizes do you work on?",
          a: "From 30-ton structures to large-scale complex steel projects. Through strategic fabrication partners in Israel and overseas, we match each project to the right production route based on scope, timeline, budget and required quality standards.",
        },
      ],
    },
    cta: {
      heading: "Ready to Build?",
      body: "Tell Us About Your Steel Project. We'll handle the steel — from structural design through final erection.",
      call: "Call: 050-846-4851",
      whatsapp: "WhatsApp Us",
    },
  },
};
