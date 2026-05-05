import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/lib/blog";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Cold Room & Refrigeration Blog | Cherry Refrigeration Brisbane",
  description: "Tips, pricing guides and field notes on cold rooms, freezer rooms, refrigeration and HVAC across Brisbane and SE QLD.",
  alternates: { canonical: `${business.url}/blog` },
};

export default function BlogIndex() {
  return (
    <>
      <Hero eyebrow="Blog" h1="Cold room & refrigeration field notes" sub="Pricing guides, troubleshooting, compliance and energy notes from Cherry Refrigeration's field crews." />
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
      <section className="container-x py-14 lg:py-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card p-6 group block">
            <div className="text-xs text-cherry uppercase tracking-widest font-semibold mb-1">{p.category}</div>
            <h2 className="font-display font-bold text-navy text-lg group-hover:text-cherry">{p.title}</h2>
            <p className="text-sm text-steel mt-2 line-clamp-3">{p.description}</p>
            <div className="text-xs text-steel mt-4">{new Date(p.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })} • {p.author}</div>
          </Link>
        ))}
      </section>
      <CTASection />
    </>
  );
}
