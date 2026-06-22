import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileReveal from "@/components/MobileReveal";
import { getDictionary, type Lang } from "@/content";
import { localizeHref } from "@/lib/localizeHref";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = (await params).lang as Lang;
  return buildPageMetadata(lang, "projects");
}

// Per-project images (visual data); titles/categories/locations/descriptions
// are copy and live in the dictionary (projects.items), matched here by index.
const projectImages = [
  [
    "/images/tel-hashomer/tel-hashomer-1.jpg",
    "/images/tel-hashomer/tel-hashomer-2.jpg",
  ],
  ["/images/barlev-center/barlev-1.jpg"],
  [
    "/images/migrash-11/migrash-1.jpg",
    "/images/migrash-11/migrash-2.jpg",
  ],
  [
    "/images/composite-spiral/spiral-1.jpg",
    "/images/composite-spiral/spiral-2.jpg",
    "/images/composite-spiral/spiral-3.jpg",
  ],
  [
    "/images/azrieli-columns/azrieli-1.jpg",
    "/images/azrieli-columns/azrieli-2.jpg",
  ],
  [
    "/images/wall-support/wall-1.jpg",
    "/images/wall-support/wall-2.jpg",
  ],
];

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang as Lang;
  const { projects, ui } = getDictionary(lang);
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="pt-28 pb-14 md:pt-40 md:pb-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-l-4 border-[#fd008d] pl-6">
            <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-4">
              {projects.header.eyebrow}
            </p>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              {projects.header.heading}
            </h1>
            <p className="text-gray-400 text-lg mt-5 max-w-xl leading-relaxed">
              {projects.header.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Projects (full-bleed editorial) ─── */}
      <section className="bg-[#111111]">
        {projects.items.map((project, idx) => {
          const images = projectImages[idx];
          const extra = images.slice(1);
          return (
            <article key={project.title} className="mb-12 md:mb-16">
              {/* Full-bleed hero photo with overlay */}
              <div className="relative w-full h-[60vh]">
                <Image
                  src={images[0]}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 pb-10">
                  <div data-animate className="max-w-7xl mx-auto px-6">
                    <span className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.2em] font-display">
                      {project.category}
                    </span>
                    <h2 className="font-display font-bold text-white text-4xl md:text-5xl leading-none mt-3">
                      {project.title}
                    </h2>
                    <p className="text-white/60 text-base mt-2">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description row with pink accent line */}
              <div className="max-w-7xl mx-auto px-6 mt-8 md:mt-10">
                <div className="flex items-stretch justify-between gap-8">
                  <div data-animate className="max-w-2xl">
                    <MobileReveal
                      lines={2}
                      moreLabel={ui.viewDetails}
                      lessLabel={ui.hideDetails}
                      className="text-gray-400 text-base leading-relaxed"
                    >
                      {project.description}
                    </MobileReveal>
                  </div>
                  <div className="hidden md:block w-px bg-[#fd008d] self-stretch shrink-0" />
                </div>
              </div>

              {/* Supplementary photos — full-bleed editorial */}
              {extra.length === 1 && (
                <div className="relative w-full h-80 md:h-[58vh] overflow-hidden mt-8 md:mt-12">
                  <Image
                    src={extra[0]}
                    alt={`${project.title} detail`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              )}

              {extra.length === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mt-8 md:mt-12">
                  {extra.map((img, i) => (
                    <div
                      key={i}
                      className="relative h-80 md:h-[34rem] overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} detail ${i + 1}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {extra.length >= 3 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mt-8 md:mt-12">
                  <div className="col-span-2 relative h-80 md:h-[34rem] overflow-hidden">
                    <Image
                      src={extra[0]}
                      alt={`${project.title} detail 1`}
                      fill
                      sizes="(min-width: 768px) 66vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
                    {extra.slice(1).map((img, i) => (
                      <div
                        key={i}
                        className="relative h-40 md:h-[16.6rem] overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} detail ${i + 2}`}
                          fill
                          sizes="(min-width: 768px) 22vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
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
            {projects.cta.heading}
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto">
            {projects.cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={localizeHref("/contact", lang)}
              className="bg-white text-[#fd008d] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              {projects.cta.primary}
            </Link>
            <a
              href="https://wa.me/972545367242"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              {projects.cta.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
