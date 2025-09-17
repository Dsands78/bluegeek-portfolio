import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function ProjectTeasers() {
  const items = projects.slice(0, 3);
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="rounded-2xl border border-border bg-surface p-5 hover:translate-y-[1px] transition"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-muted">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.slice(0, 3).map((t) => (
                <span key={t} className="rounded-full border border-border px-2 py-0.5 text-xs">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/projects" className="underline inline-flex items-center gap-1">
          See all projects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
