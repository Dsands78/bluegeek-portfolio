export type Project = {
    slug: string;
    title: string;
    summary: string;
    year: number;
    tech: string[];
    tags?: string[];
    link?: string;
    repo?: string;
    image?: string;
    imageAlt?: string;
    overview?: string;
    highlights?: string[];
  };
  
  export const projects: Project[] = [
    {
      slug: "ticketing-system",
      title: "Help Desk Ticketing System",
      summary:
        "Full-stack ticketing for home-health—intake, status, email alerts, SLA tracking.",
      year: 2024,
      tech: ["Spring Boot", "React", "PostgreSQL", "JWT"],
      tags: ["web app", "ops"],
      image: "/projects/geekdesk.png",
      imageAlt: "",
      overview:"Moved support from ad-hoc emails to a centralized ticketing app with SLAs, ownership, and audit trails. I led product/PM and contributed full-stack code (React/TS + API).",
      highlights: [
        "Single queue with triage, labels, and search",
        "SLA policies, escalations, and email notifications",
        "Role-based access and full ticket history",
        "Metrics dashboard for backlog, aging, and response time",
      ],
    },
    {
      slug: "paragon-childcare",
      title: "Paragon Services",
      summary:
        "Upscale brand site with intake form + CMS pages. Built for conversions.",
      year: 2025,
      tech: ["Next.js", "Tailwind", "Forms", "SEO"],
      tags: ["frontend", "marketing"],
      image: "/projects/paragon.png",
      imageAlt: "",
      overview: "Premium brand site for concierge nanny services. Focused on trust, clarity, and a smooth intake flow that captures the right details while screening for fit.",
      highlights: [
        "Luxury visual language and responsive components",
        "Intake form with validation and structured data",
        "SEO basics + analytics events on key steps",
        "CMS-ready sections for services and FAQs",
      ],
    },
    {
      slug: "mickeys-popcorn",
      title: "Mickey’s Popcorn — Storefront Redesign (concept)",
      summary:
        "Wix → modern UX: product cards, flavor story, shop flow, and brand polish.",
      year: 2025,
      tech: ["UX", "UI", "A/B ideas"],
      tags: ["case study"],
      image: "/projects/Mickeys.png",
      imageAlt: "",
      overview: "",
      highlights: [],
    },
    {
      slug: "magnolia-coffee-dashboard",
      title: "Magnolia Coffee — Marketing KPI Dashboard",
      summary:
        "SMART goals + GA reports mock. Donut charts, cohorts, and channel lift.",
      year: 2024,
      tech: ["Next.js", "Charts", "GA4"],
      tags: ["pm", "analytics"],
      image: "",
      imageAlt: "",
      overview: "Unified marketing KPIs (paid, email, web) into a single dashboard so decisions aren’t made in silos. Clear targets, trends, and experiment tracking.",
      highlights: [
        "Defined actionable KPIs and targets with stakeholders",
        "Light ETL into a single source; segmented charts",
        "Alerting for anomalies and weekly summary digest",
        "Experiment log to connect changes to outcomes",
      ],
    },
    {
      slug: "bluegeek-portfolio",
      title: "Bluegeek Portfolio (this site)",
      summary:
        "Dark theme, shadcn-like styling, animated hero, and MDX-ready case studies.",
      year: 2025,
      tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      tags: ["frontend"],
      image: "/projects/bluegeek.png",
      imageAlt: "",
      overview: "Fast, accessible portfolio with a Bluegeek dark theme, MDX case studies, and a projects browser. Built for clarity, speed, and easy content edits.",
      highlights: [
        "Next.js App Router + TypeScript + Tailwind tokens",
        "Animated hero, navbar, and polished cards",
        "Contact API with honeypot + toast feedback",
        "Projects filters (search/year/tech/tags) and image thumbs",
        "Lighthouse ~98–100 after image and font tuning",
      ],
    },
    {
      slug: "maintenance-punchlist",
      title: "Apartment Maintenance Punch List + Virtual Warehouse",
      summary:
        "Process + tool for unit turnovers with a virtual warehouse: when stock drops below thresholds, auto-email alerts the Property Manager and Maintenance Supervisor to reorder.",
      year: 2024,
      tech: ["Sheets", "Apps Script", "Inventory", "Automation"],
      tags: ["ops", "process", "inventory"],
      image: "/projects/digitalme.png",
      imageAlt: "Punch list and inventory threshold dashboard",
      overview: "Designed a turnover process plus a lightweight inventory ‘virtual warehouse’. Items tracked with thresholds; when stock falls below minimum, an Apps Script notifier emails the Property Manager and Maintenance Supervisor to reorder.",
      highlights: [
        "Standardized unit-turn punch list and responsibilities",
        "Threshold-based inventory with auto email alerts",
        "Reduced stock-outs and faster unit turns (add metrics)",
        "Low-cost stack: Sheets + Apps Script + email",
      ],
    },
    {
      slug: "customer-console",
      title: "Telego Console - Self-Service VoIP Admin",
      summary:
      "Ran the project and contributed code for a customer console so users can manage their VoIP settings (routing, numbers, features) without calling support.",
      year: 2020,
      tech: ["Next.js", "TypeScript", "Tailwind", "Node API", "VoIP/SIP"],
      tags: ["frontend", "pm", "voip"],
      image: "/projects/telego.png",
      imageAlt: "VoIP web console showing number routing and feature toggles",
      overview: 
      "Customers previously had to call support for routine VoIP changes. I led the project and contributed code to ship a self-serve console for number management, call routing, IVR/voicemail, and feature toggles, with guardrails and auditability.",
      highlights:[
        "Scoped top self-serve actions with Support + customers",
        "Modeled tenants, numbers, call flows; RBAC + audit events",
        "Progressive disclosure and confirms for risky actions (e.g., rerouting live numbers)",
        "Reduced support change-tickets by ~XX% (replace with your metric)",
      ],
    },

    {
      slug: "iimpact",
      title: "IIMPACT — Brand, Web & Marketing",
      summary:
        "End-to-end design for a transformational/experiential healing brand: visual identity, web design, site build, and marketing collateral.",
      year: 2022, // ← adjust if needed
      tech: ["Branding", "Design System", "Next.js", "Tailwind", "SEO"],
      tags: ["design", "frontend", "marketing"],
      image: "/projects/iimpact.png",
      imageAlt: "IIMPACT website hero with brand visuals and typography",
      overview: "End-to-end brand and web: identity, typography, color, and a component library. Designed and built the marketing site and produced collateral for social, print, and email to drive qualified leads and consistent presentation.",
      highlights: [
        "Unified brand system across web and marketing collateral",
        "Accessible, fast site with clear services and intake flow",
        "Foundational SEO (metadata, OG, sitemap) and analytics",
        "Design tokens for easy theming and future growth",
      ],
    },

    {
      slug: "ultralinq-integrations",
      title: "UltraLinq — HL7 Integrations & Interoperability",
      summary:
        "Project managed HL7 interfaces for an imaging platform; post-acquisition, led the effort for external systems to interoperate with UltraLinq’s software.",
      year: 2018, // ← adjust if needed
      tech: ["HL7 v2", "Interface Engine", "Healthcare IT", "Project Management"],
      tags: ["pm", "healthcare", "imaging", "integration"],
      image: "/projects/ultralinq.png",
      imageAlt: "Diagram of HL7 message flow between systems and UltraLinq",
      overview: "As PM, I coordinated HL7 v2 interfaces (orders, results, demographics) for an imaging platform. Post-acquisition, I led an interoperability program to connect external systems to UltraLinq, standardizing mappings and adding monitoring/playbooks.",
      highlights: [
        "Managed HL7 interface projects end-to-end with stakeholders",
        "Standardized mappings and error handling across partners",
        "Introduced runbooks and alerting; improved lead time to go-live",
        "Drove interoperability roadmap post-acquisition",
      ],
},
  ];
  