import Image from "next/image";
import Link from "next/link";
import Faq from "@/components/Faq";
import PlanningLoop from "@/components/PlanningLoop";
import { getDictionary, type Lang } from "@/content";
import { localizeHref } from "@/lib/localizeHref";

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

// Featured-project images (data); titles/locations are user-facing copy and
// live in the dictionary (home.featured.items), matched here by index.
const featuredImages = [
  "/images/barlev-center/barlev-1.jpg",
  "/images/composite-spiral/spiral-1.jpg",
  "/images/azrieli-columns/azrieli-1.jpg",
];

const testimonialLogos = [
  { logo: "https://livnieng.com/wp-content/uploads/2021/03/livni-logo.png", logoOpacity: 0.7 },
  {
    logo: "https://moment-steel.com/wp-content/uploads/2026/02/%D7%A9%D7%99%D7%9B%D7%95%D7%9F-%D7%95%D7%91%D7%99%D7%A0%D7%95%D7%99-%D7%90%D7%A4%D7%95%D7%A8-1.webp",
    logoOpacity: 0.7,
  },
  { logo: "https://www.davideng.co.il/wp-content/uploads/2018/12/logo-white.png", logoOpacity: 0.65 },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Lang;
  const { home } = getDictionary(lang);
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
            className="mx-auto mb-10 opacity-95 max-md:hidden"
            priority
          />
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            {home.hero.headline[0]}
            <br />
            {home.hero.headline[1]}
            <br />
            {home.hero.headline[2]}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {home.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={localizeHref("/contact", lang)}
              className="bg-[#fd008d] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#e0007c] transition-colors"
            >
              {home.hero.ctaContact}
            </Link>
            <Link
              href={localizeHref("/projects", lang)}
              className="border border-white/60 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-white hover:bg-white/10 transition-colors"
            >
              {home.hero.ctaProjects}
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
            {home.stats.map((stat, i) => (
              <div
                key={stat.label}
                data-animate
                className={`text-center px-4 ${i < 2 ? "sm:border-r border-white/10" : ""}`}
              >
                <p className="font-display font-bold text-white text-5xl md:text-8xl leading-none">
                  {/* Isolate the value (e.g. "50+") so the trailing sign doesn't
                      reorder under RTL — renders "50+", not "+50". Inert in LTR. */}
                  <bdi>{stat.value}</bdi>
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
              {home.services.eyebrow}
            </p>
            <h2 className="font-display font-extrabold text-white text-4xl md:text-6xl leading-none">
              {home.services.heading}
            </h2>
          </div>

          <PlanningLoop services={home.services.items} />
        </div>
      </section>

      {/* ─── Projects Preview ─── */}
      <section className="py-16 md:py-24 bg-[#111111]" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <div data-animate className="flex items-end justify-between mb-8 md:mb-12">
            <div>
              <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-4">
                {home.featured.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {home.featured.heading}
              </h2>
            </div>
            <Link
              href={localizeHref("/projects", lang)}
              className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold uppercase tracking-widest transition-colors"
            >
              {home.featured.viewAll}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {home.featured.items.map((project, i) => (
              <Link
                key={featuredImages[i]}
                data-animate
                href={localizeHref("/projects", lang)}
                className="relative h-80 overflow-hidden group block"
              >
                <Image
                  src={featuredImages[i]}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] font-display">{project.location}</p>
                  <p className="font-display font-bold text-white text-2xl leading-tight mt-1">{project.title}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href={localizeHref("/projects", lang)}
              className="text-[#fd008d] text-sm font-semibold uppercase tracking-widest"
            >
              {home.featured.viewAllMobile}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Client Logos ─── */}
      <section className="bg-[#0a0a0a] border-t border-b border-white/10 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display text-center mb-6">
            {home.clients.eyebrow}
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
              {home.testimonials.eyebrow}
            </p>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl">
              {home.testimonials.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {home.testimonials.items.map((t, i) => (
              <div
                key={t.name}
                className="relative bg-[#1a1a1a] border border-white/10 rounded-none p-6 md:p-8"
              >
                <p className="font-body italic text-white/80 text-base leading-relaxed mb-6">
                  &ldquo;{t.prefix}<strong className="text-white font-semibold">{t.bold}</strong>{t.suffix}&rdquo;
                </p>
                <p className="text-white font-bold text-base">{t.name}</p>
                <p className="text-white/40 text-sm uppercase tracking-widest mt-1">
                  {t.company}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonialLogos[i].logo}
                  alt={t.company}
                  className="mt-6 md:mt-0 md:absolute md:bottom-8 md:right-8"
                  style={{
                    height: "32px",
                    width: "auto",
                    filter: "none",
                    opacity: testimonialLogos[i].logoOpacity,
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
              {home.faq.eyebrow}
            </p>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl">
              {home.faq.heading}
            </h2>
          </div>
          <div>
            <Faq items={home.faq.items} />
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
            {home.cta.heading}
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto">
            {home.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0508464851"
              className="bg-white text-[#fd008d] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              {home.cta.call}
            </a>
            <a
              href="https://wa.me/972545367242"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              {home.cta.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
