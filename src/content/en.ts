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
    switchLang: "עברית",
    callAria: "Call Yoel",
    switchLangAria: "Switch to Hebrew",
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
    contactShai: "Shai:",
    contactYoel: "Yoel:",
    facebookAria: "Facebook",
    shareAria: "Share",
    linkCopied: "Link copied",
  },
  ui: {
    photo: "Photo",
  },
  seo: {
    home: {
      title: "Moment Steel — End-to-End Steel Solutions",
      description:
        "Licensed structural engineering, shop drawings, 3D laser scanning, detailing, fabrication management, and site erection. Edge to Edge Steel Solutions.",
    },
    about: {
      title: "About — Moment Steel",
      description:
        "Meet the in-house engineering team behind Moment Steel — structural design, detailing, fabrication management, and on-site erection under one roof.",
    },
    projects: {
      title: "Projects — Moment Steel",
      description:
        "Steel projects by Moment Steel — excavation support, complex-geometry assemblies, and structural support systems engineered and erected across Israel.",
    },
    contact: {
      title: "Contact — Moment Steel",
      description:
        "Get in touch with Moment Steel. Licensed structural engineers available for projects across Israel.",
    },
  },
  home: {
    hero: {
      heading: "Every project reaches its moment of truth",
      subheading: "Design, fabrication and installation of steel structures",
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
      call: "Call:",
      whatsapp: "WhatsApp Us",
    },
  },
  about: {
    hero: {
      eyebrow: "About Moment Steel",
      headline: {
        line1: "Steel projects fail",
        line2: "at handoffs.",
        line3: "We eliminated them.",
      },
      paragraph:
        "Moment Steel was founded on a simple idea: the same team carries the project from the first calculation to the last bolt on site. No relay race between separate firms.",
    },
    story: {
      eyebrow: "Our Story",
      heading: "One Steel Team. Full Project Control.",
      paragraphs: [
        "The trouble usually starts between design, fabrication and site: a change that never reached the workshop, or steel arriving at a site that no longer matches the drawings.",
        "Structural design, shop drawings, 3D scanning, fabrication coordination and site erection all happen in-house. That means fewer coordination mistakes, and fewer budget and schedule overruns.",
        "Today we deliver complex steel structures for developers, contractors and engineering teams across Israel.",
      ],
      tags: ["Warehouses", "Structural Additions", "Complex Geometry", "Logistics Facilities"],
    },
    whyChooseUs: {
      heading: "Why Choose Us",
      items: [
        {
          title: "Engineering, Detailing and Site Control In-House",
          description:
            "The engineer, the detailer and the fabrication manager work side by side. Problems get solved before they reach the workshop or the site.",
        },
        {
          title: "One Team, Full Accountability",
          description:
            "We own every phase of the project, with one point of contact. When something changes, you know who's on it.",
        },
        {
          title: "Scan Early. Fabricate With Confidence.",
          description:
            "When site conditions are critical, we scan before fabrication and model what's actually there. Connections fit, with less rework on site.",
        },
        {
          title: "Built for Complex Steel Projects",
          description:
            "Complex geometry, additions over occupied buildings, tight sites with no room for error. That's the kind of project we built our process around.",
        },
      ],
    },
    team: {
      heading: "The Team",
      subhead: "",
      members: [
        {
          name: "Shay Sabag",
          role: "Structural Engineer & Design Lead",
          description:
            "Licensed structural engineer with a master’s degree in structural engineering and broad experience in steel structures. Leads the engineering, from member and connection design to the final signed calculations.",
          tags: ["Dlubal", "IdeaStatica", "Strap", "Seismic Design"],
          initials: "SS",
          photo: "/images/team/shay.webp",
        },
        {
          name: "Yoel Griner",
          role: "Project Manager & Survey Lead",
          description:
            "12 years of experience in production management and steel project coordination. Leads fabrication coordination, site deliveries, surveying and 3D scanning, making sure what was designed matches what's on site.",
          tags: ["3D Laser Scanning", "Fabrication", "Logistics", "Geodesy"],
          initials: "YG",
          photo: "/images/team/yoel.webp",
        },
        {
          name: "Alex Yelishenko",
          role: "Senior Steel Detailer & Mechanical Engineer",
          description:
            "Specializes in steel detailing and parametric modeling for complex and repetitive geometry. Produces clear shop drawing packages the workshop can build from without guessing.",
          tags: ["Tekla Structures", "Grasshopper", "Parametric Modeling", "Detailing"],
          initials: "AY",
        },
      ],
    },
    cta: {
      heading: "Tell Us About Your Steel Project.",
      body: "Share your project scope and we'll get back to you within one business day.",
      primary: "Get in Touch",
      secondary: "See Our Work",
    },
  },
  projects: {
    header: {
      eyebrow: "Our Work",
      heading: "Projects",
      intro:
        "A selection of steel structures we've engineered, detailed, and erected — from excavation bracing to complex one-of-a-kind assemblies.",
    },
    clientLabel: "Client",
    items: [
      {
        id: "dira-lehaskir",
        title: "Pergolas — Dira Lehaskir",
        client: "Shikun & Binui",
        description:
          "A covering and protection pergola for kindergartens, together with landscape pergolas, at the Dira Lehaskir project in Ben Shemen. The roofing combines gratings and shade membranes with concealed connection details, keeping the clean lines the architects required. In the landscaped areas, pergolas with decorative roofing and concealed connections were installed. Designed, fabricated and erected by Moment Steel, meeting all architectural requirements and site constraints.",
      },
      {
        id: "givon-school",
        title: "Givon School",
        client: "Tel Aviv-Yafo Municipality",
        description:
          "An elevated sports court for the Givon School — a composite deck connected to an existing building.",
      },
      {
        id: "tel-hashomer",
        title: "Tel HaShomer",
        client: "GeoDanya",
        description:
          "A two-level excavation-shoring system of roughly 120 tons at Tel HaShomer. Each level was erected in just three days — a tight schedule that demanded close coordination and precise on-site execution.",
      },
      {
        id: "wall-support",
        title: "Climbing Wall Support System",
        client: "Shikun & Binui",
        description:
          "A modular climbing wall support system designed for slab construction stages in double-height areas of the Spiral Tower. The system was engineered to support an 11-meter-high wall and be reused across multiple floors with controlled installation geometry.",
      },
      {
        id: "migrash-11",
        title: "Migrash 11",
        client: "Raz Reshef Engineering",
        description:
          "A design-build retaining wall support system installed against the building core during staged construction. By rethinking the structural scheme, Moment Steel reduced the steel weight by more than 60% while maintaining the required support capacity throughout the works.",
      },
      {
        id: "composite-spiral",
        title: "Composite Column Spiral",
        client: "Shikun & Binui",
        description:
          "Design and detailing of prestressed composite columns for a 91-story tower, including post-tensioning elements connected to the concrete core and steel columns fabricated at varying angles. The project was developed through advanced code-based parametric modeling.",
      },
      {
        id: "azrieli-columns",
        title: "Azrieli Columns Support",
        client: "Shikun & Binui",
        description:
          "Horizontal support system for existing round columns during foundation strengthening works at the Azrieli Towers in Tel Aviv, where slabs were cut down to level -4. Each floor was scanned separately, allowing Moment Steel to develop a repeatable collar system adapted to site deviations and suitable for fast fabrication.",
      },
    ],
    cta: {
      heading: "Have a Project in Mind?",
      body: "From standard frames to one-off steel assemblies, we bring the engineering and execution control needed to get it built right.",
      primary: "Start a Conversation",
      whatsapp: "WhatsApp Us",
    },
  },
  contact: {
    header: {
      eyebrow: "Get in Touch",
      headline: { line1: "Let's Talk About", line2: "Your Steel Project." },
      intro:
        "Send us your scope, drawings or site challenge, and we’ll get back to you within one business day. No commitment, no sales pitch — just a clear, practical conversation about your project.",
    },
    people: [
      {
        id: "shay",
        initials: "SS",
        photo: "/images/team/shay.webp",
        name: "Shay Sabag",
      },
      {
        id: "yoel",
        initials: "YG",
        photo: "/images/team/yoel.webp",
        name: "Yoel Griner",
      },
    ],
    whatsappHeading: "Prefer WhatsApp?",
    whatsappLink: "Message us on WhatsApp",
    officeHeading: "Office",
    address: { line1: "Yoni Netanyahu 8", line2: "Petach Tikva, Israel" },
    note: "We work with developers, general contractors, and architects across Israel. If your project involves structural steel — at any stage — we're worth a call.",
    form: {
      nameLabel: "Full Name *",
      namePlaceholder: "Your name",
      companyLabel: "Company",
      companyPlaceholder: "Your company (optional)",
      phoneLabel: "Phone *",
      phonePlaceholder: "050-000-0000",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Project Description *",
      messagePlaceholder:
        "Tell us about your project — structure type, location, scope, timeline, any special requirements...",
      submit: "Send Message",
      submitting: "Sending...",
      success: "Thanks! We'll be in touch within one business day.",
      error: "Something went wrong. Please try again or call us directly.",
      helper: "We respond within one business day. Or call us directly if it's urgent.",
    },
  },
};
