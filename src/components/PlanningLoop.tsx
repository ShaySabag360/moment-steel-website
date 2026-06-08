export default function PlanningLoop() {
  return (
    <div className="my-16 px-4">
      {/* Header */}
      <p className="text-[#fd008d] text-sm font-bold uppercase tracking-[0.2em] font-display mb-3">
        The Integrated Planning Loop
      </p>
      <h3 className="text-white text-3xl font-extrabold font-display mb-2">
        One loop. Three disciplines. Always in sync.
      </h3>
      <p className="text-[#666] text-sm mb-12">
        Every change propagates instantly — no sequential handoffs, no rework.
      </p>

      {/* Diagram */}
      <div className="relative w-full" style={{height: '520px'}}>
        <svg
          viewBox="0 0 900 520"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="pl-arrow" viewBox="0 0 12 12" refX="10" refY="6"
              markerWidth="7" markerHeight="7" orient="auto">
              <path d="M2 2L10 6L2 10" fill="none" stroke="#fd008d"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </marker>
          </defs>

          {/*
            Circle center: 450, 280. Radius: 210
            Node positions (center of each node):
              01 top:         450, 70   (270°)
              02 bottom-right: 632, 385  (30°)  = 450+210*cos(30°), 280+210*sin(30°) = 450+182, 280+105
              03 bottom-left:  268, 385  (150°) = 450-182, 280+105

            Box sizes:
              01: w=240 h=110, centered at x=450 → x1=330, y=20
              02: w=220 h=110, centered at x=632 → x1=522, y=330
              03: w=220 h=110, centered at x=268 → x1=158, y=330

            Arc endpoints (on box edges):
              01→02: from (570, 80) to (522, 360)   — right side of 01, top-left of 02
              02→03: from (522, 440) to (378, 440)   — bottom-left of 02, bottom-right of 03
              03→01: from (158, 360) to (330, 80)    — top-right of 03, left side of 01
          */}

          {/* Arc 01 → 02 */}
          <path d="M 568 78 A 210 210 0 0 1 524 332"
            fill="none" stroke="#fd008d" strokeWidth="2.5" markerEnd="url(#pl-arrow)"/>

          {/* Arc 02 → 03 */}
          <path d="M 524 440 A 210 210 0 0 1 376 440"
            fill="none" stroke="#fd008d" strokeWidth="2.5" markerEnd="url(#pl-arrow)"/>

          {/* Arc 03 → 01 */}
          <path d="M 376 332 A 210 210 0 0 1 332 78"
            fill="none" stroke="#fd008d" strokeWidth="2.5" markerEnd="url(#pl-arrow)"/>

          {/* Center hub */}
          <circle cx="450" cy="280" r="58" fill="#0d0d0d" stroke="#fd008d" strokeWidth="1"/>
          <text x="450" y="273" textAnchor="middle" fill="#fd008d"
            fontSize="10" fontWeight="700" letterSpacing="2"
            fontFamily="'Barlow Condensed', sans-serif">REAL-TIME</text>
          <text x="450" y="291" textAnchor="middle" fill="#fd008d"
            fontSize="10" fontWeight="700" letterSpacing="2"
            fontFamily="'Barlow Condensed', sans-serif">SYNC</text>

          {/* NODE 01 — top */}
          <rect x="330" y="20" width="240" height="115" rx="2"
            fill="#0d0d0d" stroke="#fd008d" strokeWidth="1.5"/>
          <rect x="330" y="20" width="4" height="115" fill="#fd008d"/>
          <text x="348" y="46" fill="#fd008d" fontSize="11" fontWeight="700"
            letterSpacing="3" fontFamily="'Barlow Condensed', sans-serif">01</text>
          <text x="372" y="46" fill="#ffffff" fontSize="17" fontWeight="800"
            fontFamily="'Barlow Condensed', sans-serif">Structural Design</text>
          <text x="348" y="66" fill="#888" fontSize="12"
            fontFamily="'DM Sans', sans-serif">Full structural engineering by</text>
          <text x="348" y="82" fill="#888" fontSize="12"
            fontFamily="'DM Sans', sans-serif">licensed professionals.</text>
          <text x="348" y="98" fill="#888" fontSize="12"
            fontFamily="'DM Sans', sans-serif">Dlubal, IdeaStatica, Strap.</text>
          <text x="348" y="121" fill="#444" fontSize="10"
            fontFamily="'DM Sans', sans-serif">Dlubal · IdeaStatica · EN 1993</text>

          {/* NODE 02 — bottom right */}
          <rect x="522" y="330" width="220" height="115" rx="2"
            fill="#0d0d0d" stroke="#333" strokeWidth="1"/>
          <rect x="522" y="330" width="4" height="115" fill="#555"/>
          <text x="540" y="356" fill="#555" fontSize="11" fontWeight="700"
            letterSpacing="3" fontFamily="'Barlow Condensed', sans-serif">02</text>
          <text x="564" y="356" fill="#ffffff" fontSize="17" fontWeight="800"
            fontFamily="'Barlow Condensed', sans-serif">Shop Drawings</text>
          <text x="540" y="376" fill="#888" fontSize="12"
            fontFamily="'DM Sans', sans-serif">Fabrication-ready drawings</text>
          <text x="540" y="392" fill="#888" fontSize="12"
            fontFamily="'DM Sans', sans-serif">in Tekla. Every joint</text>
          <text x="540" y="408" fill="#888" fontSize="12"
            fontFamily="'DM Sans', sans-serif">modeled before it's made.</text>
          <text x="540" y="431" fill="#444" fontSize="10"
            fontFamily="'DM Sans', sans-serif">Tekla · Parametric · Detailing</text>

          {/* NODE 03 — bottom left */}
          <rect x="158" y="330" width="220" height="115" rx="2"
            fill="#0d0d0d" stroke="#333" strokeWidth="1"/>
          <rect x="158" y="330" width="4" height="115" fill="#555"/>
          <text x="176" y="356" fill="#555" fontSize="11" fontWeight="700"
            letterSpacing="3" fontFamily="'Barlow Condensed', sans-serif">03</text>
          <text x="200" y="356" fill="#ffffff" fontSize="17" fontWeight="800"
            fontFamily="'Barlow Condensed', sans-serif">3D Laser Scanning</text>
          <text x="176" y="376" fill="#888" fontSize="12"
            fontFamily="'DM Sans', sans-serif">Site scan before fabrication.</text>
          <text x="176" y="392" fill="#888" fontSize="12"
            fontFamily="'DM Sans', sans-serif">Point cloud captures exact</text>
          <text x="176" y="408" fill="#888" fontSize="12"
            fontFamily="'DM Sans', sans-serif">as-built geometry.</text>
          <text x="176" y="431" fill="#444" fontSize="10"
            fontFamily="'DM Sans', sans-serif">Point cloud · As-built · Fit check</text>

        </svg>
      </div>

      {/* Outcome strip */}
      <div className="border border-[#222] bg-[#0a0a0a] py-3 text-center mt-2">
        <p className="text-[#fd008d] text-[10px] font-bold uppercase tracking-[0.2em] font-display mb-1">
          The Outcome
        </p>
        <p className="text-[#888] text-xs">
          Zero rework · Precise fabrication packages · Fast on-site installation
        </p>
      </div>
    </div>
  )
}
