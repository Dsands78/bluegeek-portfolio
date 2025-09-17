export type CaseStudy = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    projectSlug?: string;
  };
  
  export const caseStudies = [
    // ...existing items
  
    { slug: "telego-console",            title: "Telego Console — Self-Serve VoIP Admin",
      excerpt: "Cut support by enabling customers to manage routing, numbers, and features.",
      date: "2024-10-01", projectSlug: "telego-console" },
  
    { slug: "iimpact",                   title: "IIMPACT — Brand, Web & Marketing",
      excerpt: "Unified brand system, responsive site, and collateral that drives qualified leads.",
      date: "2025-02-01", projectSlug: "iimpact" },
  
    { slug: "ultralinq-integrations",    title: "UltraLinq — HL7 Integrations & Interoperability",
      excerpt: "Managed HL7 interfaces and led interoperability post-acquisition.",
      date: "2023-08-01", projectSlug: "ultralinq-integrations" },
  
    { slug: "maintenance-punchlist",     title: "Maintenance Punch List + Virtual Warehouse",
      excerpt: "Turnover process plus inventory thresholds with email re-order alerts.",
      date: "2024-06-01", projectSlug: "maintenance-punchlist" },
  
    { slug: "ticketing-system",          title: "Help Desk Ticketing — SLAs, Ownership, Metrics",
      excerpt: "Centralized support with SLAs, notifications, and reporting.",
      date: "2024-05-01", projectSlug: "ticketing-system" },
  
    { slug: "paragon-childcare",         title: "Paragon Childcare — Premium Brand Site",
      excerpt: "Luxury visual language and a high-signal intake flow.",
      date: "2025-01-15", projectSlug: "paragon-childcare" },
  
    { slug: "magnolia-coffee-dashboard", title: "Magnolia Coffee — Marketing KPI Dashboard",
      excerpt: "Single source of truth with alerts and weekly digest.",
      date: "2024-03-01", projectSlug: "magnolia-coffee-dashboard" },
  
    { slug: "bluegeek-portfolio",        title: "Bluegeek Portfolio — Design System + Speed",
      excerpt: "Dark theme, MDX case studies, projects browser, and fast performance.",
      date: "2025-01-01", projectSlug: "bluegeek-portfolio" },
  ];
  