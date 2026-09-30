import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function AuthorBio({ name = siteConfig.founder }: { name?: string }) {
  return (
    <aside className="mt-12 rounded-xl border border-navy/10 bg-white p-5 flex items-start gap-4">
      <div className="h-12 w-12 shrink-0 rounded-full bg-cherry/10 grid place-items-center font-display font-extrabold text-cherry">
        {name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
      </div>
      <div className="text-sm">
        <div className="font-display font-bold text-navy">
          Written by <Link href="/about" className="text-cherry hover:underline">{name}</Link>
        </div>
        <p className="text-steel mt-1">
          Refrigeration mechanic and founder of Cherry Refrigeration, servicing cool rooms, freezer rooms and
          commercial refrigeration across Brisbane and South East Queensland.
        </p>
      </div>
    </aside>
  );
}
