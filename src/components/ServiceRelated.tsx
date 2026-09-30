import Link from "next/link";
import { ArrowRight, BookOpen, Building2, MapPin, Wallet } from "lucide-react";

export type RelatedItem = { label: string; href: string; hint?: string };

export function ServiceRelated({
  costGuideHref,
  industries,
  blogPosts,
  serviceAreas,
}: {
  costGuideHref?: string;
  industries: RelatedItem[];
  blogPosts: RelatedItem[];
  serviceAreas: RelatedItem[];
}) {
  return (
    <section className="container-x py-14">
      <h2 className="h3 mb-6">Related reading and service areas</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {costGuideHref && (
          <RelatedColumn icon={Wallet} title="Cost guide" items={[{ label: "What affects your cool room cost", href: costGuideHref }]} />
        )}
        <RelatedColumn icon={Building2} title="Industries we serve" items={industries} />
        <RelatedColumn icon={BookOpen} title="Related reading" items={blogPosts} />
        <RelatedColumn icon={MapPin} title="Service areas" items={serviceAreas} />
      </div>
    </section>
  );
}

function RelatedColumn({ icon: Icon, title, items }: { icon: any; title: string; items: RelatedItem[] }) {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="h-4 w-4 text-cherry" />
        <div className="font-display font-bold text-navy text-sm uppercase tracking-widest">{title}</div>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="group inline-flex items-start gap-1 text-sm text-cherry hover:underline">
              <span>{item.label}</span>
              <ArrowRight className="h-3 w-3 mt-0.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {item.hint && <p className="text-xs text-steel mt-0.5">{item.hint}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
