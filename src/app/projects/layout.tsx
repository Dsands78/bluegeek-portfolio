// src/app/projects/layout.tsx
import type { ReactNode } from "react";

export const metadata = { title: "Projects" };

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  // Must return JSX. No "use client" here.
  return (
    <main className="min-h-screen bg-background text-foreground">
      {children}
    </main>
  );
}
