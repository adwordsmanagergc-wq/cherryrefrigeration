"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { business, tel } from "@/lib/business";
import { services } from "@/lib/services";

const nav = [
  { label: "Services", href: "/services/cold-room-installation-brisbane", children: services.map((s) => ({ label: s.shortTitle, href: `/services/${s.slug}` })) },
  { label: "Industries", href: "/industries/restaurants-cafes" },
  { label: "Locations", href: "/locations/brisbane-cbd" },
  { label: "Cost Guide", href: "/cost-guide/cold-room-installation-cost-brisbane" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-navy/10">
      <div className="container-x flex h-16 lg:h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Cherry Refrigeration home">
          <div className="h-9 w-9 rounded-md bg-navy text-white grid place-items-center font-display font-extrabold">
            C
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-navy text-base">Cherry Refrigeration</div>
            <div className="text-[11px] text-steel uppercase tracking-wider hidden sm:block">Brisbane • SE QLD</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <Link href={item.href} className="btn-ghost text-sm">
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full pt-2 w-72 hidden group-hover:block">
                  <div className="card p-2 border border-navy/10">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block px-3 py-2 rounded text-sm text-steel hover:bg-ice hover:text-navy">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={tel} className="btn-ghost text-sm" onClick={() => (window as any).gtag?.("event", "phone_clicked")}>
            <Phone className="h-4 w-4" /> {business.phone}
          </a>
          <Link href="/get-a-quote" className="btn-primary text-sm">
            Get a Quote
          </Link>
        </div>

        <button className="lg:hidden btn-ghost p-2" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-navy/10 bg-white">
          <nav className="container-x py-3 flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="px-3 py-3 rounded text-navy font-medium hover:bg-ice">
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <a href={tel} className="btn-outline flex-1 text-sm"><Phone className="h-4 w-4" /> Call</a>
              <Link href="/get-a-quote" className="btn-primary flex-1 text-sm" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
