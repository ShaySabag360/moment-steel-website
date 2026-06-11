import MobileReveal from "@/components/MobileReveal";

type Service = {
  title: string;
  description: string;
};

/* Shared editorial row content — identical for all five rows (01–05) */
function RowInner({
  num,
  service,
  numTop = "-top-4",
  revealLabels,
}: {
  num: number;
  service: Service;
  numTop?: string;
  revealLabels: { more: string; less: string };
}) {
  return (
    <>
      {/* Watermark number — absolute, bleeds behind the title. numTop lets the
          downstream rows (04/05) drop lower on mobile so the pink separator
          accent doesn't collide with the number (mirrors 01–03). */}
      <span className={`absolute ${numTop} left-0 z-0 font-display font-bold text-white text-5xl md:text-8xl opacity-[0.12] md:opacity-[0.08] leading-none select-none pointer-events-none`}>
        {String(num).padStart(2, "0")}
      </span>
      <div className="relative z-10 flex-1 pl-6 md:pl-10">
        <h3 className="font-display font-bold text-white text-2xl md:text-4xl">
          {service.title}
        </h3>
        <MobileReveal
          lines={3}
          moreLabel={revealLabels.more}
          lessLabel={revealLabels.less}
          className="text-gray-400 text-sm md:text-base leading-relaxed mt-2 max-w-[400px]"
        >
          {service.description}
        </MobileReveal>
      </div>
    </>
  );
}

// Boxes rotated counter-clockwise ~90° around the loop center:
// 01 → upper-right, 02 → lower-right, 03 → left (same circle, same radius)
const POS = ["ur", "lr", "left"] as const;

export default function PlanningLoop({
  services,
  revealLabels,
}: {
  services: Service[];
  revealLabels: { more: string; less: string };
}) {
  const loop = services.slice(0, 3);
  const rest = services.slice(3);

  return (
    <div className="border-b border-white/10">
      {/* Rows 01–03 — the integrated planning loop. Default: plain list.
          Hover (wide desktop): stage expands + rows translate into a big ring. */}
      <div className="loop-group">
        <div className="loop-stage relative">
          {loop.map((service, i) => (
            <div
              key={service.title}
              className="loop-row relative border-t border-white/10"
            >
              <span
                aria-hidden="true"
                className="md:hidden absolute top-0 left-0 z-10 h-[3px] w-12 bg-[#fd008d]"
              />
              <div className="loop-card" data-pos={POS[i]}>
                <div className="card-box">
                  <RowInner num={i + 1} service={service} revealLabels={revealLabels} />
                </div>
              </div>
            </div>
          ))}

          {/* Big closed clockwise ring — center hub + three arcs of equal radius.
              Centered fixed-size SVG; fades in only in loop mode (wide desktop). */}
          <svg
            className="loop-arrows absolute left-1/2 top-0 pointer-events-none"
            style={{ transform: "translateX(calc(-50% + 30px))" }}
            width="1060"
            height="860"
            viewBox="0 0 1060 860"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="loop-head"
                viewBox="0 0 18 18"
                refX="11"
                refY="9"
                markerWidth="26"
                markerHeight="26"
                orient="auto"
                markerUnits="userSpaceOnUse"
              >
                <path
                  d="M3 3 L14 9 L3 15"
                  fill="none"
                  stroke="#fd008d"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>

            {/* Center hub — REAL-TIME SYNC */}
            <g className="loop-hub">
              <circle cx="530" cy="455" r="85" fill="none" stroke="#fd008d" strokeWidth="1.25" />
              <text
                x="530"
                y="450"
                textAnchor="middle"
                fill="#fd008d"
                fontFamily="'Barlow Condensed', sans-serif"
                fontSize="15"
                fontWeight="700"
                letterSpacing="3"
              >
                REAL-TIME
              </text>
              <text
                x="530"
                y="470"
                textAnchor="middle"
                fill="#fd008d"
                fontFamily="'Barlow Condensed', sans-serif"
                fontSize="15"
                fontWeight="700"
                letterSpacing="3"
              >
                SYNC
              </text>
            </g>

            {/* Three arcs of equal radius (340) → one continuous clockwise ring.
                Boxes: 03 left, 01 upper-right, 02 lower-right. */}
            {/* 03 → 01 (over the top) */}
            <path className="loop-arc" d="M200 375 A340 340 0 0 1 470 120" stroke="#fd008d" strokeWidth="3" markerEnd="url(#loop-head)" />
            {/* 01 → 02 (down the right side) */}
            <path className="loop-arc" d="M794 241 A340 340 0 0 1 794 669" stroke="#fd008d" strokeWidth="3" markerEnd="url(#loop-head)" />
            {/* 02 → 03 (across the lower-left) */}
            <path className="loop-arc" d="M470 790 A340 340 0 0 1 200 535" stroke="#fd008d" strokeWidth="3" markerEnd="url(#loop-head)" />
          </svg>
        </div>
      </div>

      {/* Rows 04–05 — linear downstream execution. Calmer/smaller; hover emphasizes. */}
      {rest.map((service, i) => (
        <div
          key={service.title}
          className="svc-row relative border-t border-white/10"
        >
          <span
            aria-hidden="true"
            className="md:hidden absolute top-0 left-0 z-10 h-[3px] w-12 bg-[#fd008d]"
          />
          <RowInner num={i + 4} service={service} numTop="max-md:top-4 md:-top-4" revealLabels={revealLabels} />
        </div>
      ))}
    </div>
  );
}
