import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { business, tel, mailto } from "@/lib/business";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { locations } from "@/lib/locations";

export function Footer() {
  return (
    <footer className="bg-navy text-white mt-16">
      <div className="container-x py-14 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="font-display font-extrabold text-2xl mb-3">Cherry Refrigeration</div>
          <p className="text-white/80 max-w-md mb-5 leading-relaxed">
            Custom cold room installation, refrigeration and air conditioning across Brisbane and South East
            Queensland.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-frost" /><a href={tel} className="hover:underline">{business.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-frost" /><a href={mailto} className="hover:underline">{business.email}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-frost" />Servicing Brisbane & SE QLD</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 text-frost" />Mon–Fri 7am–5pm • Sat 8am–1pm • 24/7 emergency</li>
          </ul>
          {(business.qbcc || business.arc || business.masterElectricians || business.publicLiability) && (
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {business.qbcc && <span className="badge bg-white/10 text-white">{business.qbcc}</span>}
              {business.arc && <span className="badge bg-white/10 text-white">{business.arc}</span>}
              {business.masterElectricians && <span className="badge bg-white/10 text-white">Master Electricians</span>}
              {business.publicLiability && <span className="badge bg-white/10 text-white">PL Insurance {business.publicLiability}</span>}
            </div>
          )}
        </div>

        <div>
          <div className="font-display font-bold mb-3">Services</div>
          <ul className="space-y-2 text-sm text-white/80">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-frost">{s.shortTitle}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display font-bold mb-3">Industries</div>
          <ul className="space-y-2 text-sm text-white/80">
            {industries.map((i) => (
              <li key={i.slug}><Link href={`/industries/${i.slug}`} className="hover:text-frost">{i.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display font-bold mb-3">Service Areas</div>
          <ul className="space-y-2 text-sm text-white/80">
            {locations.map((l) => (
              <li key={l.slug}><Link href={`/locations/${l.slug}`} className="hover:text-frost">{l.city}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} {business.legalName} — ACN {business.acn}. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/emergency-repairs" className="hover:text-white">Emergency</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
