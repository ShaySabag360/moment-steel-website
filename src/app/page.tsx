import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Structural Design",
    description:
      "Full structural engineering by licensed professionals. We run calculations in Dlubal, IdeaStatica, and Strap — selecting the right tool for the structural system at hand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M3 21h18M9 21V7l3-4 3 4v14M3 21V11l3-2M21 21V11l-3-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Shop Drawings",
    description:
      "Fabrication-ready shop drawings produced in Tekla Structures, with Grasshopper handling parametric workflows for complex elements. Drawings that go straight to the factory floor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "3D Laser Scanning",
    description:
      "We scan the site before anything is fabricated. Point cloud data captures exact as-built geometry, so components arrive ready to install — not ready to be reworked.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Detailing",
    description:
      "Parametric modeling for structures that don't fit standard templates. Spiral forms, curved members, dense connection clusters — we model every joint before it's made.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fabrication Management",
    description:
      "We manage production at trusted fabrication partners in Israel and overseas — regular factory visits, quality tracking, and delivery coordination so the steel shows up ready to install.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Site Erection",
    description:
      "Our team oversees erection from mobilization to final bolt torque. With in-house survey capability, we verify alignment at every stage — not just at the end.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const projectPreviews = [
  { src: "/images/project-1.jpg", title: "Berlav Center", location: "Mazkeret Batya" },
  { src: "/images/project-3.jpg", title: "Spiral Composite", location: "Complex Geometry" },
  { src: "/images/project-5.jpg", title: "Mizrahi 24", location: "Rehovot" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/project-2.jpg"
          alt="Steel construction project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <Image
            src="/logo/moment-white.svg"
            alt="Moment Steel"
            width={260}
            height={70}
            className="mx-auto mb-10 opacity-95"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Engineering Steel.
            <br />
            Precision Built.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Every project reaches its moment of truth. This is our moment.
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
              className="border border-white/60 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ─── Stats strip ─── */}
      <section className="bg-[#1a1a1a] border-y border-[#2d2d2d] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="text-white font-semibold text-lg">Edge to Edge Steel Solutions</p>
              <p className="text-gray-400 text-sm mt-1">
                One team managing the full steel lifecycle — design through delivery
              </p>
            </div>
            <div className="flex gap-10 text-center">
              {[
                { value: "100%", label: "In-House Engineering" },
                { value: "3", label: "Senior Engineers" },
                { value: "15+", label: "Years Combined Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[#fd008d] text-2xl font-bold">{stat.value}</p>
                  <p className="text-gray-400 text-xs mt-1 max-w-[100px]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="py-24 bg-[#0f0f0f]" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              End-to-End Steel Solutions
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              All engineering done in-house — from the first load combination to the last connection detail.
              No outsourcing, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2d2d2d]">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#111111] p-8 hover:bg-[#1a1a1a] transition-colors group"
              >
                <div className="text-[#fd008d] mb-5">{service.icon}</div>
                <h3 className="text-white font-semibold text-base mb-3 group-hover:text-[#fd008d] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects Preview ─── */}
      <section className="py-24 bg-[#111111]" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Our Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-widest transition-colors"
            >
              View All
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projectPreviews.map((project) => (
              <Link
                key={project.src}
                href="/projects"
                className="relative h-80 overflow-hidden group block"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white font-semibold text-sm">{project.title}</p>
                  <p className="text-gray-400 text-xs mt-1">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/projects"
              className="text-[#fd008d] text-sm font-semibold uppercase tracking-widest"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Strip ─── */}
      <section className="py-20 bg-[#fd008d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Build?
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Tell us what you&apos;re building. We&apos;ll handle the steel — from
            structural design through final erection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0508464851"
              className="bg-white text-[#fd008d] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Call: 050-846-4851
            </a>
            <a
              href="https://wa.me/972545367242"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
