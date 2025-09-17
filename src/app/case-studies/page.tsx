import Navbar from "../components/site/Navbar";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold">Case Studies</h1>
        <p className="mt-2 text-sm text-muted">Process, decisions, and outcomes.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="rounded-2xl border border-border bg-surface p-5 hover:translate-y-[1px] transition"
            >
              <h3 className="text-lg font-semibold">{cs.title}</h3>
              <p className="mt-1 text-sm text-muted">{cs.excerpt}</p>
              <div className="mt-4 text-xs text-muted">
                {new Date(cs.date).toLocaleDateString()}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
