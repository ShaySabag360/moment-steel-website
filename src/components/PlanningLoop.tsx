const CORE = [
  {
    num: "01",
    title: "Structural Design",
    description:
      "Full structural engineering by licensed professionals. We run calculations in Dlubal, IdeaStatica, and Strap — selecting the right tool for the structural system at hand.",
  },
  {
    num: "02",
    title: "Shop Drawings & Detailing",
    description:
      "Fabrication-ready shop drawings produced in Tekla Structures, with parametric modeling for complex and non-standard elements — spiral forms, curved members, dense connection clusters. Every joint modeled before it's made, every drawing goes straight to the factory floor.",
  },
  {
    num: "03",
    title: "3D Laser Scanning",
    description:
      "We scan the site before anything is fabricated. Point cloud data captures exact as-built geometry, so components arrive ready to install — not ready to be reworked.",
  },
];

export default function PlanningLoop() {
  return (
    <div>
      {/* Eyebrow above row 01 */}
      <div data-animate className="pl-4 md:pl-10 mb-5 flex items-center gap-2 flex-wrap">
        <span aria-hidden="true" className="text-[#fd008d] text-lg leading-none">
          ↻
        </span>
        <p className="text-[#fd008d] text-sm font-bold uppercase tracking-[0.2em] font-display">
          The Integrated Core
          <span className="text-[#fd008d]/60 font-semibold normal-case tracking-normal">
            {" "}
            — runs in parallel, not in sequence
          </span>
        </p>
      </div>

      {/* Core rows 01–03 with a connecting pink line on the left */}
      <div className="relative">
        {/* Thin pink vertical line linking the three core rows */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#fd008d]/70 z-20"
        />

        {CORE.map((service, i) => (
          <div key={service.num}>
            <div data-animate className="group border-t border-white/10">
              <div className="relative flex items-center py-8">
                {/* Watermark number — absolute, bleeds behind the title */}
                <span className="absolute -top-4 left-0 z-0 font-display font-bold text-white text-7xl md:text-8xl opacity-[0.08] leading-none select-none pointer-events-none">
                  {service.num}
                </span>

                {/* Name + description sits on top of the number */}
                <div className="relative z-10 flex-1 pl-4 md:pl-10">
                  <h3 className="font-display font-bold text-white text-2xl md:text-4xl group-hover:text-[#fd008d] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed mt-2 max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <span className="text-[#fd008d] text-xl md:text-2xl shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>

            {/* Sync cue between 01→02 and 02→03 */}
            {i < CORE.length - 1 && (
              <div className="relative z-10 flex justify-center py-1.5">
                <span className="text-[#fd008d] text-xs font-semibold uppercase tracking-[0.2em] font-display">
                  ↓ updates
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
