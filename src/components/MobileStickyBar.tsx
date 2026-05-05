"use client";

import { Phone, MessageSquare } from "lucide-react";
import { tel } from "@/lib/business";
import { QuoteCta } from "./QuoteCta";

export function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-navy/10 shadow-lg flex">
      <a
        href={tel}
        className="flex-1 flex items-center justify-center gap-2 py-4 text-navy font-semibold"
        onClick={() => (window as any).gtag?.("event", "phone_clicked", { source: "mobile_sticky" })}
      >
        <Phone className="h-5 w-5" /> Call Now
      </a>
      <QuoteCta className="flex-1 flex items-center justify-center gap-2 py-4 bg-cherry text-white font-semibold">
        <MessageSquare className="h-5 w-5" /> Quick Quote
      </QuoteCta>
    </div>
  );
}
