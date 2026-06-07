import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Berlav Center",
    location: "Mazkeret Batya",
    category: "Commercial",
    description:
      "Multi-story commercial complex requiring a full structural steel package — from stability calculations and shop drawings through fabrication oversight and site erection.",
    image: "/images/project-1.jpg",
    size: "large", // spans 2 rows
  },
  {
    title: "Spiral Composite",
    location: "Israel",
    category: "Complex Geometry",
    description:
      "A geometrically complex spiral steel assembly demanding advanced parametric modeling in Tekla and Grasshopper, precision 3D scanning, and controlled factory production.",
    image: "/images/project-3.jpg",
    size: "normal",
  },
  {
    title: "Spiral Column Supports",
    location: "Israel",
    category: "Structural Support",
    description:
      "Custom column support system engineered to fit a spiral architectural form. Tight tolerances required point-cloud scanning of the existing structure before a single component was cut.",
    image: "/images/project-5.jpg",
    size: "normal",
  },
  {
    title: "Mizrahi 24",
    location: "Rehovot",
    category: "Residential",
    description:
      "Steel structural frame for a multi-story residential building. Tight urban site with limited crane access — erection sequencing and logistics planning were as critical as the engineering.",
    image: "/images/project-4.jpg",
    size: "large",
  },
  {
    title: "Steel Framework",
    location: "Central Israel",
    category: "Industrial",
    description: null,
    image: "/images/project-6.jpg",
    size: "normal",
  },
  {
    title: "Complex Installation",
    location: "Israel",
    category: "Complex Geometry",
    description: null,
    image: "/images/project-7.jpg",
    size: "normal",
  },
  {
    title: "Structural Addition",
    location: "Israel",
    category: "Addition",
    description: null,
    image: "/images/project-2.jpg",
    size: "normal",
  },
  {
    title: "Site Erection",
    location: "Israel",
    category: "Installation",
    description: null,
    image: "/images/project-8.jpg",
    size: "normal",
  },
];

const featured = projects.filter((p) => p.description);
const additional = projects.filter((p) => !p.description);

const categoryColors: Record<string, string> = {
  "Complex Geometry": "bg-[#fd008d]/20 text-[#fd008d]",
  Commercial: "bg-blue-900/30 text-blue-300",
  Residential: "bg-green-900/30 text-green-300",
  Industrial: "bg-orange-900/30 text-orange-300",
  "Structural Support": "bg-purple-900/30 text-purple-300",
  Addition: "bg-yellow-900/30 text-yellow-300",
  Installation: "bg-gray-700/40 text-gray-300",
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

      {/* ─── Featured Projects ─── */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] mb-10">
            Featured
          </p>

          {/* Asymmetric grid: large left + 2 stacked right, then large right + 2 stacked left */}
          <div className="space-y-4">
            {/* Row 1: Berlav (large) + Spiral Composite + Spiral Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Large card */}
              <div className="lg:col-span-2 lg:row-span-2 relative h-72 lg:h-auto min-h-[320px] overflow-hidden group">
                <Image
                  src={featured[0].image}
                  alt={featured[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 ${
                      categoryColors[featured[0].category]
                    }`}
                  >
                    {featured[0].category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mt-3">
                    {featured[0].title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    {featured[0].location}
                  </p>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed max-w-lg">
                    {featured[0].description}
                  </p>
                </div>
              </div>

              {/* Two stacked cards */}
              <div className="flex flex-col gap-4">
                {featured.slice(1, 3).map((project) => (
                  <div
                    key={project.title}
                    className="relative h-56 overflow-hidden group"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span
                        className={`text-xs font-semibold uppercase tracking-widest px-2.5 py-1 ${
                          categoryColors[project.category]
                        }`}
                      >
                        {project.category}
                      </span>
                      <h3 className="text-white font-bold mt-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {project.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Mizrahi (large, reversed) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Large card on the right */}
              <div className="lg:col-start-2 lg:col-span-2 relative h-72 lg:h-[360px] overflow-hidden group">
                <Image
                  src={featured[3].image}
                  alt={featured[3].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 ${
                      categoryColors[featured[3].category]
                    }`}
                  >
                    {featured[3].category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mt-3">
                    {featured[3].title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    {featured[3].location}
                  </p>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed max-w-lg">
                    {featured[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Additional Work ─── */}
      <section className="pb-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#fd008d] text-xs font-bold uppercase tracking-[0.2em] mb-10">
            Additional Work
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {additional.map((project) => (
              <div
                key={project.title}
                className="relative h-48 md:h-56 overflow-hidden group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/25 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 ${
                      categoryColors[project.category]
                    }`}
                  >
                    {project.category}
                  </span>
                  <p className="text-white text-sm font-semibold mt-1.5">
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
