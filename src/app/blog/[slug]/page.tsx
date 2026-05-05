import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/blog";
import { business } from "@/lib/business";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd, articleSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: `${p.title} | Cherry Refrigeration`,
    description: p.description,
    alternates: { canonical: `${business.url}/blog/${p.slug}` },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) return notFound();
  const url = `${business.url}/blog/${p.slug}`;
  return (
    <>
      <JsonLd data={articleSchema({ title: p.title, description: p.description, date: p.date, author: p.author, url })} />
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: p.title, href: `/blog/${p.slug}` }]} />
      <article className="container-x py-14 lg:py-20 max-w-prose mx-auto">
        <div className="text-xs text-cherry uppercase tracking-widest font-semibold mb-2">{p.category}</div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">{p.title}</h1>
        <div className="text-sm text-steel mt-3 mb-8">
          By {p.author}{p.reviewer ? ` • Reviewed by ${p.reviewer}` : ""} • {new Date(p.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
        </div>
        <div className="space-y-5 text-steel leading-relaxed text-lg">
          {p.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>

        <div className="mt-12 pt-8 border-t border-navy/10">
          <div className="font-display font-bold text-navy mb-3">Related posts</div>
          <ul className="space-y-2">
            {blogPosts.filter((o) => o.slug !== p.slug).slice(0, 3).map((o) => (
              <li key={o.slug}><Link href={`/blog/${o.slug}`} className="text-cherry hover:underline">{o.title}</Link></li>
            ))}
          </ul>
        </div>
      </article>
      <CTASection />
    </>
  );
}
