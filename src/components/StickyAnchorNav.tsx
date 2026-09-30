"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Anchor = { id: string; label: string };

export function StickyAnchorNav({ anchors, offsetTop = 64 }: { anchors: Anchor[]; offsetTop?: number }) {
  const [active, setActive] = useState<string>(anchors[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: `-${offsetTop + 20}px 0px -60% 0px`, threshold: 0 }
    );
    anchors.forEach((a) => {
      const el = document.getElementById(a.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [anchors, offsetTop]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - offsetTop - 8;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 lg:top-20 z-20 bg-ice/95 backdrop-blur border-y border-navy/10"
    >
      <div className="container-x">
        <ul className="flex gap-1 overflow-x-auto py-2 no-scrollbar text-sm">
          {anchors.map((a) => (
            <li key={a.id} className="shrink-0">
              <a
                href={`#${a.id}`}
                onClick={(e) => handleClick(e, a.id)}
                className={cn(
                  "inline-flex items-center rounded-full px-3.5 py-1.5 font-medium whitespace-nowrap transition-colors",
                  active === a.id
                    ? "bg-navy text-white"
                    : "text-steel hover:bg-navy/5 hover:text-navy"
                )}
              >
                {a.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
