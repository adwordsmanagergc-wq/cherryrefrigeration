import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { business } from "@/lib/business";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="container-x pt-4 text-xs text-steel">
      <JsonLd data={breadcrumbSchema(trail.map((t) => ({ name: t.name, url: business.url + t.href })))} />
      <ol className="flex flex-wrap items-center gap-1">
        {trail.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3 w-3" />}
            {i === trail.length - 1 ? (
              <span className="text-navy font-medium">{c.name}</span>
            ) : (
              <Link href={c.href} className="hover:text-navy">{c.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
