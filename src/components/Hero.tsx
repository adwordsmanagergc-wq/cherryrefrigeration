import { Phone, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import Image from "next/image";
import { business, tel } from "@/lib/business";
import { QuoteCta } from "./QuoteCta";

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
    <section className="relative bg-logo text-white overflow-hidden">
      {/* Photo backing */}
      {showImage && (
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1900&q=70"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-logo via-logo/95 to-navy-800/95" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-frost/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cherry/25 blur-3xl" />
        </div>
      )}

      <div className="container-x relative py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="badge bg-white/10 text-frost border border-white/15 mb-5">{eyebrow}</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            {h1}
          </h1>
          <p className="lede text-white/85 mt-5 max-w-2xl">{sub}</p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-7">
            <QuoteCta className="btn-primary text-base whitespace-nowrap">
              Get My Free Quote <ArrowRight className="h-4 w-4" />
            </QuoteCta>
            <a
              href={tel}
              className="btn-outline border-white text-white hover:bg-white hover:text-navy text-base whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              <span className="sm:hidden">Call {business.phone}</span>
              <span className="hidden sm:inline">Call Keith — {business.phone}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 max-w-xl">
            <Stat icon={Clock} label="15+ yrs" sub="In business" />
            <Stat icon={ShieldCheck} label="QBCC" sub="Licensed" />
            <Stat icon={Award} label="ARC + Master" sub="Electricians" />
          </div>
        </div>

        {showImage && (
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <div className="aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=75"
                  alt="Interior of a commercial cold room with stainless steel shelving"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-logo via-transparent to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-cherry grid place-items-center">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm">Custom-built cold rooms</div>
                  <div className="text-xs text-white/80">Designed &amp; installed in South East QLD</div>
                </div>
              </div>
            </div>
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
