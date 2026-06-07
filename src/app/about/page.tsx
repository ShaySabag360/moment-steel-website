import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Shay Sabag",
    role: "Structural Engineer & Constructor",
    description:
      "Shay holds a master's degree focused on steel seismic behavior and brings licensed structural engineer credentials to every project. He leads the engineering phase from initial load models through final stamped calculations, with deep experience in high-demand seismic design.",
    tags: ["Dlubal", "IdeaStatica", "Strap", "Seismic Design"],
    initials: "SS",
  },
  {
    name: "Yoel Greiner",
    role: "Project Manager & Geodesy Lead",
    description:
      "With 12 years managing production environments, Yoel bridges the gap between design intent and manufacturing reality. He coordinates fabrication across partner facilities, manages delivery logistics, and personally leads 3D scanning operations to ensure field conditions match the model.",
    tags: ["3D Laser Scanning", "Fabrication", "Logistics", "Geodesy"],
    initials: "YG",
  },
  {
    name: "Arthur Kutsrov",
    role: "Senior Detailer & Mechanical Engineer",
    description:
      "Arthur's fluency in Tekla Structures and parametric design tools makes him invaluable on projects with complex or repetitive geometry. He turns engineering models into shop drawing packages that go straight to the factory floor — no interpretation required.",
    tags: ["Tekla Structures", "Grasshopper", "Parametric Modeling", "Detailing"],
    initials: "AK",
  },
];

const differentiators = [
  {
    title: "All Engineering In-House",
    description:
      "When design and fabrication management sit in the same office, problems get solved before they become problems. Our engineering team owns the entire technical chain — there's no vendor to blame and no communication breakdown to explain.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "One Team, Full Accountability",
    description:
      "We take responsibility for every phase: structural analysis, shop drawings, factory oversight, and field installation. One contract, one team, one point of contact. If something needs to change mid-project, we adapt — without passing it off.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Scan First, Fabricate Second",
    description:
      "Before a component is fabricated, we scan the site. Point cloud data gives us the exact as-built geometry — so connections land where they're supposed to, the first time. No rework, no delays waiting for field fixes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Complex Projects Welcome",
    description:
      "Spiral geometries. Additions onto occupied structures. Tight sites with no margin for error. We've built our workflows specifically around the projects that stress-test a team's capability. The harder the job, the more it plays to our strengths.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="relative pt-40 pb-24 bg-[#0f0f0f] overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#fd008d]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] mb-5">
            About Moment Steel
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            Steel projects fail
            <br />
            at handoffs.
            <br />
            <span className="text-[#fd008d]">We eliminated them.</span>
          </h1>
          <p className="text-gray-400 text-lg mt-8 max-w-2xl leading-relaxed">
            We started Moment Steel on a single conviction: one team should
            carry a project from the first structural calculation to the last
            bolt on site. Not a relay race — a continuous sprint with full
            accountability at every stage.
          </p>
        </div>
      </section>

      {/* ─── Company Story ─── */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] mb-5">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                One Roof. Full Control.
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Most structural failures aren&apos;t structural at all. They happen
                  in the gaps between firms — when the engineer doesn&apos;t know what
                  the fabricator changed, or when the installation crew shows up
                  to a site that doesn&apos;t match the drawings.
                </p>
                <p>
                  We built Moment Steel to close those gaps permanently. By
                  keeping structural engineering, shop drawing production, 3D
                  scanning, and site management under one roof, we eliminated
                  the coordination failures that derail projects on cost and
                  schedule.
                </p>
                <p>
                  Today we deliver complex steel structures for developers,
                  contractors, and planners across Israel — on schedule and to
                  spec, from the first load combination to the last torque check.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Warehouses",
                  "Structural Additions",
                  "Complex Geometry",
                  "Logistics Facilities",
                ].map((type) => (
                  <span
                    key={type}
                    className="border border-[#2d2d2d] text-gray-300 text-xs px-4 py-2 uppercase tracking-widest"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-80 lg:h-[480px] overflow-hidden">
                <Image
                  src="/images/composite-spiral/spiral-2.jpg"
                  alt="Composite Column Spiral steel project"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#fd008d] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Differentiators ─── */}
      <section className="py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Moment Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-7 bg-[#1a1a1a] border border-[#2d2d2d] hover:border-[#fd008d]/40 transition-colors group"
              >
                <div className="text-[#fd008d] shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#fd008d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              The Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Three Engineers. One Vision.
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Every project is handled by a senior engineer — no project
              managers in the middle, no junior handoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#1a1a1a] border border-[#2d2d2d] p-8 hover:border-[#fd008d]/40 transition-colors group"
              >
                <div className="w-16 h-16 bg-[#fd008d]/10 border border-[#fd008d]/30 flex items-center justify-center mb-6 group-hover:bg-[#fd008d]/20 transition-colors">
                  <span className="text-[#fd008d] font-bold text-lg tracking-wider">
                    {member.initials}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-[#fd008d] text-xs font-semibold uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 border border-[#2d2d2d] px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#1a1a1a] border-t border-[#2d2d2d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tell us what you&apos;re building.
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Share your project scope and we&apos;ll get back to you within one
            business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#fd008d] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#e0007c] transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="border border-[#2d2d2d] text-gray-300 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-white hover:text-white transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
