"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What makes Moment Steel different?",
    a: "One accountable team from structural calculation to final erection. Instead of managing separate designers, detailers, fabricators and installers, clients work with one technical partner responsible for the full steel chain.",
  },
  {
    q: "Do you perform 3D laser scanning on site?",
    a: "Yes. Our in-house survey team performs 3D laser scanning and brings verified site conditions into the model. This helps us fabricate steel components that account for real site deviations and reduces delays caused by concrete tolerances or changing field conditions.",
  },
  {
    q: "Can you work with ready drawings and tight timelines?",
    a: "Yes. Moment Steel is built to enter projects quickly, even when drawings already exist and the schedule is tight. Our lean structure allows fast engineering and detailing response without the overhead of larger firms.",
  },
  {
    q: "What project sizes do you work on?",
    a: "From 30-ton structures to large-scale complex steel projects. Through strategic fabrication partners in Israel and overseas, we match each project to the right production route based on scope, timeline, budget and required quality standards.",
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
