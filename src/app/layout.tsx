// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Derek Sands — Bluegeek", template: "%s — Derek Sands" },
  description: "Frontend & PM portfolio: Next.js + Tailwind, projects and case studies.",
  openGraph: {
    title: "Derek Sands — Bluegeek",
    description: "Frontend & PM portfolio: Next.js + Tailwind, projects and case studies.",
    url: "/",
    siteName: "Bluegeek",
    type: "website",
    images: [{ url: "/og", width: 1200, height: 630, alt: "Derek Sands — Bluegeek" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Derek Sands — Bluegeek",
    description: "Portfolio & case studies",
    images: ["/og"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // NOTE: no "use client" here; layouts are Server Components
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
