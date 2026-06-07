import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "BarLev Center",
    location: "Israel",
    category: "Struts & Walers",
    description:
      "Steel strut and waler system designed to support the excavation retaining walls during deep foundation work. Engineered for the specific load conditions of the site, fabricated, and installed by our team.",
    images: ["/images/barlev-center/barlev-1.jpg"],
  },
  {
    title: "Composite Column Spiral",
    location: "Israel",
    category: "Complex Geometry",
    description:
      "A geometrically complex spiral steel assembly demanding advanced parametric modeling in Tekla and Grasshopper, precision 3D scanning, and tightly controlled factory production.",
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
      "Custom column support system engineered to fit a complex architectural form. Tight tolerances required point-cloud scanning of the existing structure before a single component was fabricated.",
    images: [
      "/images/azrieli-columns/azrieli-1.jpg",
      "/images/azrieli-columns/azrieli-2.jpg",
    ],
  },
  {
    title: "Migrash 11",
    location: "Beit Shemesh",
    category: "Struts & Walers",
    description:
      "Temporary steel shoring system for a deep excavation in Beit Shemesh. Struts and walers designed and detailed to hold the retaining wall under full excavation loads, with installation managed on site.",
    images: [
      "/images/migrash-11/migrash-1.jpg",
      "/images/migrash-11/migrash-2.jpg",
    ],
  },
];

const categoryColors: Record<string, string> = {
  "Complex Geometry": "bg-[#fd008d]/20 text-[#fd008d] border-[#fd008d]/30",
  "Struts & Walers": "bg-amber-900/30 text-amber-300 border-amber-700/30",
  "Structural Support": "bg-purple-900/30 text-purple-300 border-purple-700/30",
  Commercial: "bg-blue-900/30 text-blue-300 border-blue-700/30",
  Residential: "bg-green-900/30 text-green-300 border-green-700/30",
  Industrial: "bg-orange-900/30 text-orange-300 border-orange-700/30",
};

export default function ProjectsPage() {
  return (
    <>
      {/* ─── Header ─── */}
      <section className="relative pt-40 pb-16 bg-[#0f0f0f] overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#fd008d]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] mb-5">
            Our Work
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Projects
          </h1>
          <p className="text-gray-400 text-lg mt-5 max-w-xl leading-relaxed">
            A selection of steel structures we&apos;ve engineered, detailed, and
            erected — from straightforward frames to complex one-of-a-kind
            assemblies.
          </p>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {projects.map((project, index) => (
            <div key={project.title}>
              {/* Project header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
                <div>
                  <span
                    className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 border mb-3 ${
                      categoryColors[project.category]
                    }`}
                  >
                    {project.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">{project.location}</p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md text-right hidden sm:block">
                  {project.description}
                </p>
              </div>

              {/* Mobile description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 sm:hidden">
                {project.description}
              </p>

              {/* Images grid */}
              {project.images.length === 1 && (
                <div className="relative w-full h-72 md:h-96 overflow-hidden">
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
                  {/* First image larger */}
                  <div className="col-span-2 md:col-span-2 relative h-64 md:h-80 overflow-hidden">
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

              {/* Divider (not on last item) */}
              {index < projects.length - 1 && (
                <div className="mt-24 border-t border-[#2d2d2d]" />
              )}
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
