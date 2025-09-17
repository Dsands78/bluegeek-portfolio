import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-muted max-w-2xl">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
