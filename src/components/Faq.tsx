"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What sets you apart from other steel contractors?",
    a: "One team. One address. From structural calculation to final bolt — no handoffs, no coordination gaps, no surprises.",
  },
  {
    q: "Do you perform 3D laser scanning on site?",
    a: "Yes. Our in-house geodesy team performs laser scans that feed directly into our modeling software, allowing us to fabricate components that fit existing conditions to the millimeter.",
  },
  {
    q: "Can you handle tight timelines?",
    a: "Yes. Our lean structure lets us mobilize quickly and deliver engineering and detailing fast — without the overhead of large firms.",
  },
  {
    q: "What project sizes do you work on?",
    a: "From 30-ton structures to large-scale complex assemblies. We match each project to the right fabrication partner — local or overseas — based on scope, timeline, and budget.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-b border-white/10">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-t border-white/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display font-bold text-white text-xl md:text-2xl">
                {item.q}
              </span>
              <span className="font-display font-bold text-[#fd008d] text-2xl leading-none shrink-0">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="font-body text-base text-white/60 leading-relaxed pb-6 max-w-3xl">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
