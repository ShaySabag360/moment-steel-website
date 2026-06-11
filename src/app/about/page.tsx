import Image from "next/image";
import Link from "next/link";
import MobileReveal from "@/components/MobileReveal";
import { getDictionary } from "@/content";

const { about } = getDictionary();

export const metadata = {
  title: "About — Moment Steel",
  description:
    "Meet the in-house engineering team behind Moment Steel — structural design, detailing, fabrication management, and on-site erection under one roof.",
};

// "Why Choose Us" card icons (visual data); titles/descriptions are copy and
// live in the dictionary (about.whyChooseUs.items), matched here by index.
const differentiatorIcons = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-[#0f0f0f] overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#fd008d]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-5">
            {about.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight max-w-3xl">
            {about.hero.headline.line1}
            <br />
            {about.hero.headline.line2}
            <br />
            <span className="text-[#fd008d]">{about.hero.headline.line3}</span>
          </h1>
          <p className="text-gray-400 text-lg mt-8 max-w-2xl leading-relaxed">
            {about.hero.paragraph}
          </p>
        </div>
      </section>

      {/* ─── Company Story ─── */}
      <section className="py-14 md:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-animate>
              <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-5">
                {about.story.eyebrow}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {about.story.heading}
              </h2>
              <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                <p>{about.story.paragraphs[0]}</p>
                <MobileReveal variant="collapse" className="space-y-4">
                  <p>{about.story.paragraphs[1]}</p>
                  <p>{about.story.paragraphs[2]}</p>
                </MobileReveal>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {about.story.tags.map((type) => (
                  <span
                    key={type}
                    className="border border-[#2d2d2d] text-gray-300 text-sm px-4 py-2 uppercase tracking-widest"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div data-animate className="relative">
              <div className="relative h-80 lg:h-[480px] overflow-hidden">
                <Image
                  src="/images/composite-spiral/spiral-2.jpg"
                  alt="Composite Column Spiral steel project"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
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
      <section className="py-14 md:py-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div data-animate className="text-center mb-10 md:mb-14">
            <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-4">
              {about.whyChooseUs.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {about.whyChooseUs.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {about.whyChooseUs.items.map((item, i) => (
              <div
                key={item.title}
                data-animate
                className="flex gap-4 md:gap-5 p-5 md:p-7 bg-[#1a1a1a] border border-[#2d2d2d] hover:border-[#fd008d]/40 transition-colors group"
              >
                <div className="text-[#fd008d] shrink-0 mt-1">{differentiatorIcons[i]}</div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#fd008d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="py-14 md:py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div data-animate className="text-center mb-10 md:mb-14">
            <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-4">
              {about.team.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {about.team.heading}
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base leading-relaxed">
              {about.team.subhead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.team.members.map((member) => (
              <div
                key={member.name}
                data-animate
                className="bg-[#1a1a1a] border border-[#2d2d2d] p-8 hover:border-[#fd008d]/40 transition-colors group"
              >
                <div className="w-16 h-16 bg-[#fd008d]/10 border border-[#fd008d]/30 flex items-center justify-center mb-6 group-hover:bg-[#fd008d]/20 transition-colors">
                  <span className="text-[#fd008d] font-bold text-lg tracking-wider">
                    {member.initials}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-[#fd008d] text-sm font-semibold uppercase tracking-[0.2em] mb-4 font-display">
                  {member.role}
                </p>
                <MobileReveal
                  lines={3}
                  className="text-gray-400 text-base leading-relaxed mb-6"
                >
                  {member.description}
                </MobileReveal>

                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-gray-500 border border-[#2d2d2d] px-2.5 py-1"
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
      <section className="relative overflow-hidden py-16 md:py-20 bg-[#fd008d]">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-display font-bold text-white opacity-[0.04] text-[200px] md:text-[340px] leading-none whitespace-nowrap"
        >
          MOMENT
        </span>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-white text-5xl md:text-6xl mb-4">
            {about.cta.heading}
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto">
            {about.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#fd008d] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              {about.cta.primary}
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              {about.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
