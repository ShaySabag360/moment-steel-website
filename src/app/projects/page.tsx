import Image from "next/image";
import Link from "next/link";
import MobileReveal from "@/components/MobileReveal";

export const metadata = {
  title: "Projects — Moment Steel",
  description:
    "Steel projects by Moment Steel — excavation support, complex-geometry assemblies, and structural support systems engineered and erected across Israel.",
};

const projects = [
  {
    title: "BarLev Center",
    location: "Israel",
    category: "Excavation Support",
    description:
      "A 120-ton, three-level retaining wall support system delivered as a full design-build project. Moment Steel performed the structural design, scanned the pile wall, and fabricated the steel to match real site deviations — all under a challenging project schedule.",
    images: ["/images/barlev-center/barlev-1.jpg"],
  },
  {
    title: "Migrash 11",
    location: "Beit Shemesh",
    category: "Excavation Support",
    description:
      "A design-build retaining wall support system installed against the building core during staged construction. By rethinking the structural scheme, Moment Steel reduced the steel weight by more than 60% while maintaining the required support capacity throughout the works.",
    images: [
      "/images/migrash-11/migrash-1.jpg",
      "/images/migrash-11/migrash-2.jpg",
    ],
  },
  {
    title: "Composite Column Spiral",
    location: "Israel",
    category: "Complex Geometry",
    description:
      "Design and detailing of prestressed composite columns for a 91-story tower, including post-tensioning elements connected to the concrete core and steel columns fabricated at varying angles. The project was developed through advanced code-based parametric modeling.",
    images: [
      "/images/composite-spiral/spiral-1.jpg",
      "/images/composite-spiral/spiral-2.jpg",
      "/images/composite-spiral/spiral-3.jpg",
    ],
  },
  {
    title: "Azrieli Columns Support",
    location: "Israel",
    category: "Structural Support",
    description:
      "Horizontal support system for existing round columns during foundation strengthening works at the Azrieli Towers in Tel Aviv, where slabs were cut down to level -4. Each floor was scanned separately, allowing Moment Steel to develop a repeatable collar system adapted to site deviations and suitable for fast fabrication.",
    images: [
      "/images/azrieli-columns/azrieli-1.jpg",
      "/images/azrieli-columns/azrieli-2.jpg",
    ],
  },
  {
    title: "Wall Support System",
    location: "Israel",
    category: "Structural Support",
    description:
      "A modular climbing wall support system designed for slab construction stages in double-height areas of the Spiral Tower. The system was engineered to support an 11-meter-high wall and be reused across multiple floors with controlled installation geometry.",
    images: [
      "/images/wall-support/wall-1.jpg",
      "/images/wall-support/wall-2.jpg",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="pt-28 pb-14 md:pt-40 md:pb-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-l-4 border-[#fd008d] pl-6">
            <p className="text-[#fd008d] text-xl font-bold uppercase tracking-[0.25em] font-display mb-4">
              Our Work
            </p>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              Projects
            </h1>
            <p className="text-gray-400 text-lg mt-5 max-w-xl leading-relaxed">
              A selection of steel structures we&apos;ve engineered, detailed,
              and erected — from excavation bracing to complex one-of-a-kind
              assemblies.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Projects (full-bleed editorial) ─── */}
      <section className="bg-[#111111]">
        {projects.map((project) => {
          const extra = project.images.slice(1);
          return (
            <article key={project.title} className="mb-12 md:mb-16">
              {/* Full-bleed hero photo with overlay */}
              <div className="relative w-full h-[60vh]">
                <Image
                  src={project.images[0]}
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
                      moreLabel="View details"
                      lessLabel="Hide details"
                      className="text-gray-400 text-base leading-relaxed"
                    >
                      {project.description}
                    </MobileReveal>
                  </div>
                  <div className="hidden md:block w-px bg-[#fd008d] self-stretch shrink-0" />
                </div>

                {/* Supplementary photos */}
                {extra.length === 1 && (
                  <div className="relative w-full h-72 md:h-96 overflow-hidden mt-10">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
                    {extra.map((img, i) => (
                      <div
                        key={i}
                        className="relative h-64 md:h-80 overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} detail ${i + 1}`}
                          fill
                          sizes="50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {extra.length >= 3 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-10">
                    <div className="col-span-2 relative h-64 md:h-96 overflow-hidden">
                      <Image
                        src={extra[0]}
                        alt={`${project.title} detail 1`}
                        fill
                        sizes="(min-width: 768px) 66vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-3">
                      {extra.slice(1).map((img, i) => (
                        <div
                          key={i}
                          className="relative h-32 md:h-[186px] overflow-hidden"
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
              </div>
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
            Have a Project in Mind?
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto">
            From standard frames to one-off steel assemblies, we bring the
            engineering and execution control needed to get it built right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#fd008d] px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              Start a Conversation
            </Link>
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
