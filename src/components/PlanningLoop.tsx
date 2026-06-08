const NODES = [
  {
    num: "01",
    title: "Structural Design",
    desc: "Full structural engineering by licensed professionals. We run calculations in Dlubal, IdeaStatica, and Strap — selecting the right tool for the structural system at hand.",
    meta: "Dlubal · IdeaStatica · EN 1993",
    x: 330,
    y: 14,
    w: 240,
    h: 152,
    active: true,
  },
  {
    num: "02",
    title: "Shop Drawings & Detailing",
    desc: "Fabrication-ready shop drawings produced in Tekla Structures, with parametric modeling for complex and non-standard elements. Every joint modeled before it's made.",
    meta: "Tekla · Parametric · Detailing",
    x: 520,
    y: 320,
    w: 224,
    h: 152,
    active: false,
  },
  {
    num: "03",
    title: "3D Laser Scanning",
    desc: "We scan the site before anything is fabricated. Point cloud data captures exact as-built geometry, so components arrive ready to install — not ready to be reworked.",
    meta: "Point cloud · As-built · Fit check",
    x: 156,
    y: 320,
    w: 224,
    h: 152,
    active: false,
  },
];

const BARLOW = "'Barlow Condensed', sans-serif";
const DMSANS = "'DM Sans', sans-serif";

export default function PlanningLoop() {
  return (
    <div className="my-16">
      {/* Header */}
      <p className="text-[#fd008d] text-sm font-bold uppercase tracking-[0.2em] font-display mb-3">
        The Integrated Planning Loop
      </p>
      <h3 className="text-white text-3xl md:text-4xl font-extrabold font-display mb-2">
        One loop. Three disciplines. Always in sync.
      </h3>
      <p className="text-[#888] text-base mb-10">
        Every change propagates instantly — no sequential handoffs, no rework.
      </p>

      {/* Diagram */}
      <div className="relative w-full max-w-[860px] mx-auto">
        <svg viewBox="0 0 900 500" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Integrated planning loop: Structural Design, Shop Drawings & Detailing, and 3D Laser Scanning in a continuous real-time sync loop">
          <defs>
            <marker
              id="pl-arrow"
              viewBox="0 0 12 12"
              refX="9"
              refY="6"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path
                d="M2 2L10 6L2 10"
                fill="none"
                stroke="#fd008d"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>

          {/* Faint orbit guide */}
          <circle cx="450" cy="280" r="210" fill="none" stroke="#2a2a2a" strokeWidth="0.75" strokeDasharray="3 6" />

          {/* Circular arcs (clockwise): 01 → 02 → 03 → 01 */}
          <path d="M 568 78 A 210 210 0 0 1 524 330" fill="none" stroke="#fd008d" strokeWidth="2.5" markerEnd="url(#pl-arrow)" />
          <path d="M 524 442 A 210 210 0 0 1 376 442" fill="none" stroke="#fd008d" strokeWidth="2.5" markerEnd="url(#pl-arrow)" />
          <path d="M 376 330 A 210 210 0 0 1 332 78" fill="none" stroke="#fd008d" strokeWidth="2.5" markerEnd="url(#pl-arrow)" />

          {/* Center hub */}
          <circle cx="450" cy="280" r="56" fill="#0d0d0d" stroke="#fd008d" strokeWidth="1" />
          <text x="450" y="276" textAnchor="middle" fill="#fd008d" fontSize="11" fontWeight="700" letterSpacing="2.5" fontFamily={BARLOW}>
            REAL-TIME
          </text>
          <text x="450" y="293" textAnchor="middle" fill="#fd008d" fontSize="11" fontWeight="700" letterSpacing="2.5" fontFamily={BARLOW}>
            SYNC
          </text>

          {/* Node cards (HTML via foreignObject for natural text wrapping) */}
          {NODES.map((n) => (
            <foreignObject key={n.num} x={n.x} y={n.y} width={n.w} height={n.h}>
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  boxSizing: "border-box",
                  height: "100%",
                  background: "#0d0d0d",
                  border: `1px solid ${n.active ? "#fd008d" : "#333"}`,
                  borderLeft: `4px solid ${n.active ? "#fd008d" : "#555"}`,
                  padding: "11px 14px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ color: n.active ? "#fd008d" : "#666", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", fontFamily: BARLOW }}>
                    {n.num}
                  </span>
                  <span style={{ color: "#ffffff", fontSize: "17px", fontWeight: 800, lineHeight: 1.05, fontFamily: BARLOW }}>
                    {n.title}
                  </span>
                </div>
                <p style={{ color: "#9a9a9a", fontSize: "11.5px", lineHeight: 1.32, fontFamily: DMSANS, margin: 0, flex: 1 }}>
                  {n.desc}
                </p>
                <p style={{ color: "#555", fontSize: "10px", letterSpacing: "0.3px", fontFamily: DMSANS, margin: "7px 0 0" }}>
                  {n.meta}
                </p>
              </div>
            </foreignObject>
          ))}
        </svg>
      </div>

      {/* Outcome strip */}
      <div className="border border-[#222] bg-[#0a0a0a] py-3.5 text-center mt-4 max-w-[860px] mx-auto">
        <p className="text-[#fd008d] text-[11px] font-bold uppercase tracking-[0.2em] font-display mb-1">
          The Outcome
        </p>
        <p className="text-[#888] text-sm">
          Zero rework · Precise fabrication packages · Fast on-site installation
        </p>
      </div>
    </div>
  );
}
