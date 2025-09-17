import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, ExternalLink, FileText, Image as ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";
import { caseStudies } from "@/data/case-studies"; // if alias isn't set, use ../../data/case-studies

export default function ProjectCard({ p }: { p: Project }) {
  const study = caseStudies.find(cs => cs.projectSlug === p.slug || cs.slug === p.slug);

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 hover:translate-y-[1px] transition">
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-background">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.imageAlt ?? p.title}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-background/60 border border-border flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-muted" />
            </div>
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background/40 to-transparent" />
      </div>

      {/* Text */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="mt-1 text-sm text-muted">{p.summary}</p>
        </div>
        <span className="text-xs text-muted">{p.year}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.slice(0, 4).map(t => (
          <span key={t} className="rounded-full border border-border px-2 py-0.5 text-xs">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
        <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-1 underline">
          View <ArrowRight className="h-4 w-4" />
        </Link>

        {study && (
          <Link
            href={`/case-studies/${study.slug}`}
            className="inline-flex items-center gap-1 underline"
          >
            Case Study <FileText className="h-4 w-4" />
          </Link>
        )}

        {p.link && (
          <a href={p.link} target="_blank" className="inline-flex items-center gap-1 underline">
            Live <ExternalLink className="h-4 w-4" />
          </a>
        )}
        {p.repo && (
          <a href={p.repo} target="_blank" className="inline-flex items-center gap-1 underline">
            Code <Code2 className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
