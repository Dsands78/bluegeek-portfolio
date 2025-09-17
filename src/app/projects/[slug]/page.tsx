import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Code2, ArrowLeft, FileText } from "lucide-react";

import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";

type Params = { slug: string };

export const revalidate = 0;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return { title: "Project not found" };
  return { title: `${p.title} — Project`, description: p.summary };
}

export default function ProjectPage({ params }: { params: Params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const study = caseStudies.find(cs => cs.projectSlug === p.slug || cs.slug === p.slug);


  const cs = caseStudies.find((x) => x.projectSlug === p.slug);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <Link href="/projects" className="inline-flex items-center gap-1 text-sm underline">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>

        <h1 className="mt-4 text-3xl md:text-4xl font-bold">{p.title}</h1>
        {study && (
          <div className="mt-3">
        <Link
          href={`/case-studies/${study.slug}`}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm hover:translate-y-[0.5px] transition"
        >
        <FileText className="h-4 w-4" />
          Read the Case Study
        </Link>
      </div>
      )}

        <p className="mt-2 text-muted">{p.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="rounded-full border border-border px-2 py-0.5 text-xs bg-surface">
              {t}
            </span>
          ))}
          {p.tags?.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-2 py-0.5 text-xs">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4 text-sm">
          {cs && (
            <Link href={`/case-studies/${cs.slug}`} className="underline">
              Read the case study
            </Link>
          )}
          {p.link && (
            <a href={p.link} target="_blank" className="underline inline-flex items-center gap-1">
              Live <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" className="underline inline-flex items-center gap-1">
              Code <Code2 className="h-4 w-4" />
            </a>
          )}
        </div>

        <section className="mt-10 space-y-4">
  <h2 className="text-xl font-semibold">Overview</h2>

  {p.overview ? (
    <p className="text-sm leading-7 text-muted">{p.overview}</p>
  ) : (
    <p className="text-sm leading-7 text-muted">
      Add a 4–6 sentence narrative: problem → role → approach → outcome (include metrics if available).
    </p>
  )}

  {(p.highlights?.length ?? 0) > 0 ? (
    <ul className="list-disc pl-6 text-sm leading-7">
      {p.highlights!.map((h) => <li key={h}>{h}</li>)}
    </ul>
  ) : (
    <ul className="list-disc pl-6 text-sm leading-7">
      <li>My role: e.g., lead frontend + PM.</li>
      <li>Highlights: accessibility, performance, clean DX.</li>
      <li>Result: add KPI improvements here.</li>
    </ul>
  )}
</section>

      </div>
    </main>
  );
}
