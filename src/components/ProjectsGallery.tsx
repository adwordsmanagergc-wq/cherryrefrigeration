import Link from "next/link";
import { projects } from "@/lib/projects";

export function ProjectsGallery({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="container-x py-14 lg:py-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="badge-cherry">Recent projects</span>
        <h2 className="h2 mt-3">Cold room installations across Brisbane</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="card overflow-hidden group block">
            <div className="aspect-[4/3] bg-gradient-to-br from-navy to-navy-700 grid place-items-center text-white/60 text-xs uppercase tracking-widest">
              {p.industry}
            </div>
            <div className="p-5">
              <div className="text-xs text-cherry font-semibold uppercase tracking-widest mb-1">{p.suburb}</div>
              <h3 className="font-display font-bold text-navy group-hover:text-cherry">{p.title}</h3>
              <p className="text-sm text-steel mt-2 line-clamp-2">{p.summary}</p>
              <div className="text-xs text-steel mt-3">{p.size}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
