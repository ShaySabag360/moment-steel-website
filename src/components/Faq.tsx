"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/types";

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-b border-white/10">
      {items.map((item, i) => {
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
