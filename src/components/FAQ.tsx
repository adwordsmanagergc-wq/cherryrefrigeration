"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-navy/10 rounded-xl border border-navy/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              className="w-full flex items-start gap-4 text-left p-5 hover:bg-ice"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display font-bold text-navy flex-1">{item.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-cherry transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <div className="px-5 pb-5 text-steel leading-relaxed">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
