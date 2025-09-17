import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import { ArrowRight } from "lucide-react";

export default function CaseStudyTeasers() {
  const items = caseStudies.slice(0, 2);
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="rounded-2xl border border-border bg-surface p-5 hover:translate-y-[1px] transition"
          >
            <h3 className="text-lg font-semibold">{cs.title}</h3>
            <p className="mt-1 text-sm text-muted">{cs.excerpt}</p>
            <div className="mt-4 text-xs text-muted">{new Date(cs.date).toLocaleDateString()}</div>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/case-studies" className="underline inline-flex items-center gap-1">
          Read all case studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
