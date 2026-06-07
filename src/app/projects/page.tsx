import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "BarLev Center",
    location: "Israel",
    category: "Excavation Support",
    description:
      "Steel strut and waler system designed to brace the retaining walls during deep foundation excavation. Engineered for the site's lateral earth loads, fabricated, and installed end-to-end by the Moment Steel team.",
    images: ["/images/barlev-center/barlev-1.jpg"],
  },
  {
    title: "Migrash 11",
    location: "Beit Shemesh",
    category: "Excavation Support",
    description:
      "Temporary excavation bracing for a deep cut in Beit Shemesh. Struts and walers sized and detailed to carry full lateral loads through every excavation stage, with installation coordinated on site.",
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
      "A geometrically complex spiral steel assembly demanding advanced parametric modeling in Tekla and Grasshopper, precision 3D scanning of the existing structure, and tightly controlled factory production.",
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
      "Custom column support system engineered to fit a complex architectural form. Point-cloud scanning of the existing structure ensured every fabricated component landed exactly where it needed to.",
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
      "Steel wall support structure designed to carry significant lateral and vertical loads against an existing wall. Engineered, detailed, and erected by our team with in-house survey verification throughout.",
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
      <section className="pt-40 pb-20 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div data-animate className="border-l-4 border-[#fd008d] pl-6">
            <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] font-display mb-4">
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
            <article key={project.title} className="mb-16">
              {/* Full-bleed hero photo with overlay */}
              <div className="relative w-full h-[60vh]">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 pb-10">
                  <div data-animate className="max-w-7xl mx-auto px-6">
                    <span className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] font-display">
                      {project.category}
                    </span>
                    <h2 className="font-display font-bold text-white text-5xl leading-none mt-3">
                      {project.title}
                    </h2>
                    <p className="text-white/60 text-sm mt-2">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description row with pink accent line */}
              <div className="max-w-7xl mx-auto px-6 mt-10">
                <div className="flex items-stretch justify-between gap-8">
                  <p data-animate className="text-gray-400 text-base leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  <div className="hidden md:block w-px bg-[#fd008d] self-stretch shrink-0" />
                </div>

                {/* Supplementary photos */}
                {extra.length === 1 && (
                  <div className="relative w-full h-72 md:h-96 overflow-hidden mt-10">
                    <Image
                      src={extra[0]}
                      alt={`${project.title} detail`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {extra.length === 2 && (
                  <div className="grid grid-cols-2 gap-3 mt-10">
                    {extra.map((img, i) => (
                      <div
                        key={i}
                        className="relative h-64 md:h-80 overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} detail ${i + 1}`}
                          fill
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
      <section className="py-20 bg-[#fd008d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 data-animate className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p data-animate className="text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Whether it&apos;s a standard frame or something no one&apos;s built
            before — we&apos;re the right call.
          </p>
          <div data-animate className="flex flex-col sm:flex-row gap-4 justify-center">
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
