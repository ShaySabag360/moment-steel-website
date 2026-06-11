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
  about: {
    hero: {
      eyebrow: "About Moment Steel",
      headline: {
        line1: "Steel projects fail",
        line2: "at handoffs.",
        line3: "We eliminated them.",
      },
      paragraph:
        "Moment Steel was built around one principle: one accountable team should carry a steel project from the first structural calculation to the last bolt on site. Not a relay race between separate firms — one controlled process with accountability at every stage.",
    },
    story: {
      eyebrow: "Our Story",
      heading: "One Steel Team. Full Project Control.",
      paragraphs: [
        "Most steel project failures are not caused by the steel itself. They happen in the gaps between engineering, fabrication and site — when design changes are not coordinated, or when the steel arrives to conditions that no longer match the drawings.",
        "We built Moment Steel to close those gaps before they become project delays. By keeping structural engineering, shop drawings, 3D scanning, fabrication coordination and site erection under one roof, we reduce the coordination failures that derail projects on cost and schedule.",
        "Today we deliver complex steel structures for developers, contractors and engineering teams across Israel — on schedule and to specification, from the first calculation to the final torque check.",
      ],
      tags: ["Warehouses", "Structural Additions", "Complex Geometry", "Logistics Facilities"],
    },
    whyChooseUs: {
      eyebrow: "Why Choose Us",
      heading: "Why Contractors Work With Moment Steel",
      items: [
        {
          title: "Engineering, Detailing and Site Control In-House",
          description:
            "When engineering, detailing and fabrication management work as one team, issues are resolved before they reach the workshop or the site. One technical team owns the chain of responsibility, reducing handoff risks and keeping decisions clear.",
        },
        {
          title: "One Team, Full Accountability",
          description:
            "We take responsibility for every phase: structural analysis, shop drawings, fabrication oversight and site erection. One team, one point of contact and clear accountability when the project needs to adapt.",
        },
        {
          title: "Scan Early. Fabricate With Confidence.",
          description:
            "When site conditions are critical, we scan early and bring verified as-built geometry into the model — helping connections fit as planned and reducing field adjustments.",
        },
        {
          title: "Built for Complex Steel Projects",
          description:
            "Spiral geometries. Additions onto occupied structures. Tight sites with no margin for error. Our workflows are built for projects that require tight coordination, precise detailing and controlled execution from start to finish.",
        },
      ],
    },
    team: {
      eyebrow: "The Team",
      heading: "Senior Steel Professionals. One Accountable Team.",
      subhead:
        "Every project is handled by a senior engineer — no project managers in the middle, no junior handoffs.",
      members: [
        {
          name: "Shay Sabag",
          role: "Structural Engineer & Execution Lead",
          description:
            "Shay is a licensed structural engineer with a master’s degree in structural engineering and broad experience in steel structures. He leads the engineering process from member design through connection coordination and final signed calculations, with a focus on practical, buildable and responsible design.",
          tags: ["Dlubal", "IdeaStatica", "Strap", "Seismic Design"],
          initials: "SS",
        },
        {
          name: "Yoel Greiner",
          role: "Project Manager & Survey Lead",
          description:
            "Yoel brings 12 years of experience managing production environments and coordinating steel projects from design intent to site execution. He leads fabrication coordination, delivery logistics and 3D scanning operations, helping align engineering requirements, workshop production and real site conditions throughout the project with clear responsibility for practical execution.",
          tags: ["3D Laser Scanning", "Fabrication", "Logistics", "Geodesy"],
          initials: "YG",
        },
        {
          name: "Arthur Kocherov",
          role: "Senior Steel Detailer & Mechanical Engineer",
          description:
            "Arthur brings advanced steel detailing experience and parametric modeling tools for complex and repetitive steel geometry. He develops clear, fabrication-ready shop drawing packages that translate engineering requirements into practical workshop information, supporting efficient production and reducing interpretation during fabrication.",
          tags: ["Tekla Structures", "Grasshopper", "Parametric Modeling", "Detailing"],
          initials: "AK",
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
    items: [
      {
        title: "BarLev Center",
        location: "Israel",
        category: "Excavation Support",
        description:
          "A 120-ton, three-level retaining wall support system delivered as a full design-build project. Moment Steel performed the structural design, scanned the pile wall, and fabricated the steel to match real site deviations — all under a challenging project schedule.",
      },
      {
        title: "Migrash 11",
        location: "Beit Shemesh",
        category: "Excavation Support",
        description:
          "A design-build retaining wall support system installed against the building core during staged construction. By rethinking the structural scheme, Moment Steel reduced the steel weight by more than 60% while maintaining the required support capacity throughout the works.",
      },
      {
        title: "Composite Column Spiral",
        location: "Israel",
        category: "Complex Geometry",
        description:
          "Design and detailing of prestressed composite columns for a 91-story tower, including post-tensioning elements connected to the concrete core and steel columns fabricated at varying angles. The project was developed through advanced code-based parametric modeling.",
      },
      {
        title: "Azrieli Columns Support",
        location: "Israel",
        category: "Structural Support",
        description:
          "Horizontal support system for existing round columns during foundation strengthening works at the Azrieli Towers in Tel Aviv, where slabs were cut down to level -4. Each floor was scanned separately, allowing Moment Steel to develop a repeatable collar system adapted to site deviations and suitable for fast fabrication.",
      },
      {
        title: "Wall Support System",
        location: "Israel",
        category: "Structural Support",
        description:
          "A modular climbing wall support system designed for slab construction stages in double-height areas of the Spiral Tower. The system was engineered to support an 11-meter-high wall and be reused across multiple floors with controlled installation geometry.",
      },
    ],
    cta: {
      heading: "Have a Project in Mind?",
      body: "From standard frames to one-off steel assemblies, we bring the engineering and execution control needed to get it built right.",
      primary: "Start a Conversation",
      whatsapp: "WhatsApp Us",
    },
  },
};
