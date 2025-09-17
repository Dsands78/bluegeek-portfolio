const metrics = [
    { label: "Task completion ↑", value: "28%" },
    { label: "Time-on-task ↓", value: "22%" },
    { label: "Resolution time ↓", value: "27%" },
  ];
  
  export default function Metrics() {
    return (
      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-border bg-surface p-6 text-center">
            <div className="text-3xl font-bold">{m.value}</div>
            <div className="mt-1 text-sm text-muted">{m.label}</div>
          </div>
        ))}
      </div>
    );
  }
  