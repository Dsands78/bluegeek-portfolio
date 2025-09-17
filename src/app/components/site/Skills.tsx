import { Code2, Palette, Database, GitBranch, KanbanSquare, BarChart3 } from "lucide-react";

const items = [
  { icon: Code2, label: "TypeScript + React" },
  { icon: Palette, label: "Tailwind UI" },
  { icon: Database, label: "SQL / Postgres" },
  { icon: GitBranch, label: "GitHub + CI" },
  { icon: KanbanSquare, label: "PM: Kanban/Scrum" },
  { icon: BarChart3, label: "Analytics & A/B" },
];

export default function Skills() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3">
          <Icon className="h-5 w-5 text-primary" />
          <span className="text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
