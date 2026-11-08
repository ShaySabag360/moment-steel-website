import type { Metadata } from "next";
import Link from "next/link";
import MobileReveal from "@/components/MobileReveal";
import ProjectGallery from "@/components/ProjectGallery";
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
    "/images/givon-school/givon-1.jpg",
    "/images/givon-school/givon-2.jpg",
    "/images/givon-school/givon-3.jpg",
    "/images/givon-school/givon-4.jpg",
  ],
  [
    "/images/tel-hashomer/tel-hashomer-1.jpg",
    "/images/tel-hashomer/tel-hashomer-2.jpg",
  ],
  [
    "/images/wall-support/wall-2.jpg",
    "/images/wall-support/wall-1.jpg",
  ],
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
  ["/images/barlev-center/barlev-1.jpg"],
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

      {/* ─── Projects (alternating editorial rows) ───
          Each project is one row: a 3:2 photo frame with a thumbnail strip
          (ProjectGallery) beside a text column (title / location /
          description; the dictionary's `category` is intentionally not shown). Rows alternate sides on desktop (odd rows flip the
          media column via md:order-2); on mobile they stack photo-first. The
          grid is direction-agnostic, so RTL mirrors it with no globals.css
          override. */}
      <section className="bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
          {projects.items.map((project, idx) => {
            const images = projectImages[idx];
            const flip = idx % 2 === 1;
            return (
              <article
                key={project.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-14 md:items-start py-10 md:py-16 border-t border-white/10"
              >
                <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
                  <ProjectGallery
                    images={images}
                    title={project.title}
                    thumbLabel={ui.photo}
                    priority={idx === 0}
                  />
                </div>

                <div data-animate className="md:col-span-5">
                  <h2 className="font-display font-bold text-white text-4xl md:text-5xl leading-none">
                    {project.title}
                  </h2>
                  <p className="text-white/60 text-base mt-2">
                    {project.location}
                  </p>
                  <MobileReveal
                    lines={3}
                    moreLabel={ui.viewDetails}
                    lessLabel={ui.hideDetails}
                    className="text-gray-400 text-base md:text-lg leading-relaxed mt-5 max-w-[46ch]"
                  >
                    {project.description}
                  </MobileReveal>
                </div>
              </article>
            );
          })}
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
