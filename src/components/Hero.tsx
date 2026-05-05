import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Clock, Award, Star } from "lucide-react";
import { business, tel } from "@/lib/business";
import { ColdRoomGraphic } from "./ColdRoomGraphic";

export function Hero({
  eyebrow = "Brisbane • South East Queensland",
  h1,
  sub,
  showImage = true,
}: {
  eyebrow?: string;
  h1: string;
  sub: string;
  showImage?: boolean;
}) {
  return (
    <section className="relative bg-gradient-to-br from-navy via-navy-700 to-navy-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-frost blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cherry blur-3xl" />
      </div>
      <div className="container-x relative py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="badge bg-white/10 text-frost border border-white/15 mb-5">{eyebrow}</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            {h1}
          </h1>
          <p className="lede text-white/85 mt-5 max-w-2xl">{sub}</p>

          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <Link href="/get-a-quote" className="btn-primary text-base">
              Get My Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={tel} className="btn-outline border-white text-white hover:bg-white hover:text-navy text-base">
              <Phone className="h-4 w-4" /> Call Keith — {business.phone}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-xl">
            <Stat icon={Clock} label={`${business.yearsInBusiness}+ yrs`} sub="In business" />
            <Stat icon={ShieldCheck} label="QBCC" sub="Licensed" />
            <Stat icon={Award} label="ARC + Master" sub="Electricians" />
            <Stat icon={Star} label={`${business.rating.value}★`} sub={`${business.rating.count}+ reviews`} />
          </div>
        </div>

        {showImage && (
          <div className="lg:col-span-5 hidden lg:block">
            <ColdRoomGraphic className="w-full h-auto drop-shadow-2xl" />
          </div>
        )}
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, sub }: { icon: any; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-6 w-6 text-frost shrink-0" />
      <div>
        <div className="font-display font-bold text-white text-sm">{label}</div>
        <div className="text-xs text-white/70">{sub}</div>
      </div>
    </div>
  );
}
