import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/blog";
import { business } from "@/lib/business";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd, articleSchema, faqSchema } from "@/lib/schema";

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

  const schemas: object[] = [
    articleSchema({ title: p.title, description: p.description, date: p.date, author: p.author, url }),
  ];
  if (p.faqs && p.faqs.length) schemas.push(faqSchema(p.faqs));

  return (
    <>
      <JsonLd data={schemas} />
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: p.title, href: `/blog/${p.slug}` }]} />
      <article className="container-x py-14 lg:py-20 max-w-prose mx-auto">
        <div className="text-xs text-cherry uppercase tracking-widest font-semibold mb-2">{p.category}</div>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">{p.title}</h1>
        <div className="text-sm text-steel mt-3 mb-8">
          By {p.author}
          {p.reviewer ? ` • Reviewed by ${p.reviewer}` : ""} •{" "}
          {new Date(p.date).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
        </div>

        <div className="space-y-5 text-steel leading-relaxed text-lg">
          {p.body.map((block, i) => {
            if (typeof block === "string") {
              return <p key={i}>{block}</p>;
            }
            return (
              <div key={i} className="space-y-3">
                {block.heading && <h2 className="font-display text-2xl font-bold text-navy mt-6">{block.heading}</h2>}
                <p>{block.copy}</p>
              </div>
            );
          })}
        </div>

        {p.faqs && p.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">Frequently asked questions</h2>
            <FAQ items={p.faqs} />
          </section>
        )}

        {p.sources && p.sources.length > 0 && (
          <section className="mt-12 pt-8 border-t border-navy/10">
            <h2 className="font-display text-base font-bold text-navy mb-3">Sources and further reading</h2>
            <ul className="space-y-1.5 text-sm text-steel">
              {p.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-cherry hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-12 pt-8 border-t border-navy/10">
          <div className="font-display font-bold text-navy mb-3">Related posts</div>
          <ul className="space-y-2">
            {blogPosts
              .filter((o) => o.slug !== p.slug)
              .slice(0, 3)
              .map((o) => (
                <li key={o.slug}>
                  <Link href={`/blog/${o.slug}`} className="text-cherry hover:underline">
                    {o.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </article>
      <CTASection />
    </>
  );
}
