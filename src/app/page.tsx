import Image from "next/image";
import Link from "next/link";
import Faq from "@/components/Faq";
import PlanningLoop from "@/components/PlanningLoop";

const clientLogos = [
  {
    alt: "Tidhar",
    src: "https://moment-steel.com/wp-content/uploads/2026/02/%D7%AA%D7%93%D7%94%D7%A8-%D7%90%D7%A4%D7%95%D7%A8-1.webp",
  },
  {
    alt: "Levinstein Netiv",
    src: "https://moment-steel.com/wp-content/uploads/2026/02/%D7%9C%D7%95%D7%99%D7%A0%D7%A9%D7%98%D7%99%D7%9F-%D7%A0%D7%AA%D7%99%D7%91-%D7%90%D7%A4%D7%95%D7%A8-1.webp",
  },
  {
    alt: "Gazit Engineering",
    src: "https://moment-steel.com/wp-content/uploads/2026/02/%D7%92%D7%96%D7%99%D7%AA-%D7%94%D7%A0%D7%93%D7%A1%D7%94-%D7%90%D7%A4%D7%95%D7%A8-1.webp",
  },
  {
    alt: "Shikun & Binui",
    src: "https://moment-steel.com/wp-content/uploads/2026/02/%D7%A9%D7%99%D7%9B%D7%95%D7%9F-%D7%95%D7%91%D7%99%D7%A0%D7%95%D7%99-%D7%90%D7%A4%D7%95%D7%A8-1.webp",
  },
];

const testimonials = [
  {
    quote: (
      <>
        Working with Moment gives you confidence —{" "}
        <strong className="text-white font-semibold">
          solid engineering, quality execution, and results that hold up over
          time.
        </strong>
      </>
    ),
    name: "Yaakov Livni",
    company: "Livni Engineers",
    logo: "https://livnieng.com/wp-content/uploads/2021/03/livni-logo.png",
    logoOpacity: 0.7,
  },
  {
    quote: (
      <>
        Moment combines strong engineering expertise with meticulous execution and{" "}
        <strong className="text-white font-semibold">
          reliability at every stage of the steel project.
        </strong>
      </>
    ),
    name: "Ben Shogel",
    company: "Shikun & Binui",
    logo: "https://moment-steel.com/wp-content/uploads/2026/02/%D7%A9%D7%99%D7%9B%D7%95%D7%9F-%D7%95%D7%91%D7%99%D7%A0%D7%95%D7%99-%D7%90%D7%A4%D7%95%D7%A8-1.webp",
    logoOpacity: 0.7,
  },
  {
    quote: (
      <>
        Excellent partners to work with.{" "}
        <strong className="text-white font-semibold">
          High-quality engineering, execution and erection
        </strong>{" "}
        — and outstanding coordination across all project stakeholders.
      </>
    ),
    name: "Daniel Parsha",
    company: "David Engineers",
    logo: "https://www.davideng.co.il/wp-content/uploads/2018/12/logo-white.png",
    logoOpacity: 0.65,
  },
];

const services = [
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
];

const projectPreviews = [
  { src: "/images/barlev-center/barlev-1.jpg", title: "BarLev Center", location: "Commercial" },
  { src: "/images/composite-spiral/spiral-1.jpg", title: "Composite Column Spiral", location: "Complex Geometry" },
  { src: "/images/azrieli-columns/azrieli-1.jpg", title: "Azrieli Columns Support", location: "Structural Support" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[100svh] md:h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/migrash-11/migrash-1.jpg"
          alt="Steel construction project"
          fill
          sizes="100vw"
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
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Steel Engineering.
            <br />
            Fabrication Control.
            <br />
            Site Execution.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every project reaches its moment of truth, this is our moment.
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

        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40">
          <svg className="animate-float" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ─── Stats strip ─── */}
      <section className="bg-[#0a0a0a] border-t border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-y-0">
            {[
              { value: "100%", label: "In-House Engineering" },
              { value: "50+", label: "Projects Delivered" },
              { value: "15+", label: "Years Combined Experience" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                data-animate
                className={`text-center px-4 ${i < 2 ? "sm:border-r border-white/10" : ""}`}
              >
                <p className="font-display font-bold text-white text-5xl md:text-8xl leading-none">
                  {stat.value}
                </p>
                <p className="font-body text-white/40 text-sm tracking-[0.15em] uppercase mt-4">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-[#111111]" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div data-animate className="mb-10 md:mb-14">
            <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-4">
              What We Do
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl md:text-6xl leading-none">
              End-to-End Control for Structural Steel Projects
            </h2>
          </div>

          <PlanningLoop services={services} />
        </div>
      </section>

      {/* ─── Projects Preview ─── */}
      <section className="py-16 md:py-24 bg-[#111111]" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <div data-animate className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-4">
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
                data-animate
                href="/projects"
                className="relative h-80 overflow-hidden group block"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white font-semibold text-sm">{project.title}</p>
                  <p className="text-gray-400 text-[28px] mt-1">{project.location}</p>
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

      {/* ─── Client Logos ─── */}
      <section className="bg-[#0a0a0a] border-t border-b border-white/10 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display text-center mb-6">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-10 gap-y-4">
            {clientLogos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                style={{ height: "36px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.7 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-16 md:py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-4">
              What Clients Say
            </p>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl">
              Trusted by Engineers &amp; Contractors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative bg-[#1a1a1a] border border-white/10 rounded-none p-6 md:p-8"
              >
                <p className="font-body italic text-white/80 text-base leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-white font-bold text-base">{t.name}</p>
                <p className="text-white/40 text-sm uppercase tracking-widest mt-1">
                  {t.company}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.logo}
                  alt={t.company}
                  className="mt-6 md:mt-0 md:absolute md:bottom-8 md:right-8"
                  style={{
                    height: "32px",
                    width: "auto",
                    filter: "none",
                    opacity: t.logoOpacity,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-4">
              FAQ
            </p>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl">
              Common Questions
            </h2>
          </div>
          <div>
            <Faq />
          </div>
        </div>
      </section>

      {/* ─── CTA Strip ─── */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-[#fd008d]">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-display font-bold text-white opacity-[0.04] text-[200px] md:text-[340px] leading-none whitespace-nowrap"
        >
          MOMENT
        </span>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-white text-5xl md:text-6xl mb-4">
            Ready to Build?
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Tell Us About Your Steel Project. We&apos;ll handle the steel — from
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
