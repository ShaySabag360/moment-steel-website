import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Excavation Support",
    description:
      "Temporary steel bracing systems designed to retain earth and carry lateral loads during deep excavation — engineered for the specific soil, depth, and load conditions of each site.",
    projects: [
      {
        title: "BarLev Center",
        location: "Israel",
        description:
          "Steel strut and waler system designed to brace the retaining walls during deep foundation excavation. Engineered for the site's lateral earth loads, fabricated, and installed end-to-end by the Moment Steel team.",
        images: ["/images/barlev-center/barlev-1.jpg"],
      },
      {
        title: "Migrash 11",
        location: "Beit Shemesh",
        description:
          "Temporary excavation bracing for a deep cut in Beit Shemesh. Struts and walers sized and detailed to carry full lateral loads through all excavation stages, with installation coordinated on site.",
        images: [
          "/images/migrash-11/migrash-1.jpg",
          "/images/migrash-11/migrash-2.jpg",
        ],
      },
    ],
  },
  {
    name: "Complex Geometry",
    description:
      "Structures that fall outside standard templates — spiral forms, parametric assemblies, and one-of-a-kind geometries requiring advanced modeling and tightly controlled fabrication.",
    projects: [
      {
        title: "Composite Column Spiral",
        location: "Israel",
        description:
          "A geometrically complex spiral steel assembly demanding advanced parametric modeling in Tekla and Grasshopper, precision 3D scanning of the existing structure, and tightly controlled factory production.",
        images: [
          "/images/composite-spiral/spiral-1.jpg",
          "/images/composite-spiral/spiral-2.jpg",
          "/images/composite-spiral/spiral-3.jpg",
        ],
      },
    ],
  },
  {
    name: "Structural Support",
    description:
      "Custom steel support systems engineered to fit complex existing conditions — where precise geometry, tight tolerances, and reliable load transfer are non-negotiable.",
    projects: [
      {
        title: "Azrieli Columns Support",
        location: "Israel",
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
        description:
          "Steel wall support structure designed to carry significant lateral and vertical loads against an existing wall. Engineered, detailed, and erected by our team with in-house survey verification throughout.",
        images: [
          "/images/wall-support/wall-1.jpg",
          "/images/wall-support/wall-2.jpg",
        ],
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative pt-40 pb-16 bg-[#0f0f0f] overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#fd008d]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] font-display mb-5">
            Our Work
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            Projects
          </h1>
          <p className="text-gray-400 text-lg mt-5 max-w-xl leading-relaxed">
            A selection of steel structures we&apos;ve engineered, detailed, and
            erected — from excavation bracing to complex one-of-a-kind
            assemblies.
          </p>
        </div>
      </section>

      {/* ─── Categories ─── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 space-y-28">
          {categories.map((category) => (
            <div key={category.name}>
              {/* Category header */}
              <div className="mb-12 pb-6 border-b border-[#2d2d2d]">
                <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] font-display mb-3">
                  Category
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {category.name}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  {category.description}
                </p>
              </div>

              {/* Projects in this category */}
              <div className="space-y-16">
                {category.projects.map((project, index) => (
                  <div key={project.title}>
                    {/* Project header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-5 gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-0.5">
                          {project.location}
                        </p>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-md sm:text-right">
                        {project.description}
                      </p>
                    </div>

                    {/* Images */}
                    {project.images.length === 1 && (
                      <div className="relative w-full h-72 md:h-[420px] overflow-hidden">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {project.images.length === 2 && (
                      <div className="grid grid-cols-2 gap-3">
                        {project.images.map((img, i) => (
                          <div key={i} className="relative h-64 md:h-80 overflow-hidden">
                            <Image
                              src={img}
                              alt={`${project.title} ${i + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {project.images.length === 3 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="col-span-2 relative h-64 md:h-80 overflow-hidden">
                          <Image
                            src={project.images[0]}
                            alt={`${project.title} 1`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="col-span-2 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-3">
                          {project.images.slice(1).map((img, i) => (
                            <div key={i} className="relative h-32 md:h-[154px] overflow-hidden">
                              <Image
                                src={img}
                                alt={`${project.title} ${i + 2}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Divider between projects in same category */}
                    {index < category.projects.length - 1 && (
                      <div className="mt-16 border-t border-[#1e1e1e]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-[#fd008d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Whether it&apos;s a standard frame or something no one&apos;s built
            before — we&apos;re the right call.
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
