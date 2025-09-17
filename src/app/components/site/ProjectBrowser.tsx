'use client';
import { useMemo, useState } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { projects as allProjects } from '@/data/projects';
import ProjectCard from './ProjectCard';

type Year = 'All' | number;
const uniq = <T,>(arr: T[]) => Array.from(new Set(arr));
const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

export default function ProjectBrowser() {
  // facets
  const years = useMemo<Year[]>(() => {
    const ys = uniq(allProjects.map(p => p.year)).sort((a, b) => b - a);
    return ['All', ...ys] as Year[];
  }, []);
  const techs = useMemo(() => uniq(allProjects.flatMap(p => p.tech)).sort((a, b) => a.localeCompare(b)), []);
  const tags  = useMemo(() => uniq(allProjects.flatMap(p => p.tags ?? [])).sort((a, b) => a.localeCompare(b)), []);

  // state
  const [q, setQ] = useState('');
  const [year, setYear] = useState<Year>('All');
  const [tech, setTech] = useState<string[]>([]);
  const [tag,  setTag]  = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  const toggle = (list: string[], value: string, setter: (v: string[]) => void) =>
    setter(list.includes(value) ? list.filter(x => x !== value) : [...list, value]);

  const filtered = useMemo(() => {
    const qn = q.trim().toLowerCase();
    return allProjects.filter(p => {
      if (year !== 'All' && p.year !== year) return false;
      if (tech.length && !tech.every(t => p.tech.includes(t))) return false;
      if (tag.length  && !(p.tags ?? []).some(tg => tag.includes(tg))) return false;

      if (!qn) return true;
      const hay = [p.title, p.summary, p.tech.join(' '), (p.tags ?? []).join(' ')].join(' ').toLowerCase();
      return hay.includes(qn);
    });
  }, [q, year, tech, tag]);

  const clearAll = () => { setQ(''); setYear('All'); setTech([]); setTag([]); };

  return (
    <div className="space-y-6">
      {/* controls */}
      <div className="rounded-2xl border border-border bg-surface p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* search */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
            <label htmlFor="projectSearch" className="sr-only">Search projects</label>
            <input
              id="projectSearch"
              value={q}
              onChange={(e) => setQ(e.currentTarget.value)}
              placeholder="Search by title, tech, tags…"
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-background border border-border focus:border-primary outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowFilters(v => !v)}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 bg-background text-sm"
              aria-controls="filters-panel"
              aria-expanded={showFilters}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 bg-background text-sm"
            >
              <X className="h-4 w-4" /> Clear
            </button>
          </div>
        </div>

        {/* facets */}
        {showFilters && (
          <div id="filters-panel" className="mt-4 grid gap-4">
            {/* year */}
            <div className="flex flex-wrap items-center gap-3">
              <label htmlFor="yearSelect" className="text-xs uppercase tracking-wide text-muted">Year</label>
              <select
                id="yearSelect"
                name="year"
                value={year === 'All' ? '' : String(year)}
                onChange={(e) => setYear(e.currentTarget.value ? (Number(e.currentTarget.value) as Year) : 'All')}
                className="rounded-xl border border-border bg-background px-3 py-2 text-sm"
              >
                <option value="">All</option>
                {years.filter(y => y !== 'All').map(y => (
                  <option key={String(y)} value={String(y)}>{y}</option>
                ))}
              </select>
            </div>

            {/* tech (checkbox chips) */}
            {techs.length > 0 && (
              <fieldset className="flex flex-wrap items-center gap-2">
                <legend className="mr-1 text-xs uppercase tracking-wide text-muted">Tech</legend>
                {techs.map(t => {
                  const id = `tech-${slug(t)}`;
                  const checked = tech.includes(t);
                  return (
                    <div key={t}>
                      <input
                        id={id}
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(tech, t, setTech)}
                        className="sr-only peer"
                      />
                      <label
                        htmlFor={id}
                        className={`cursor-pointer rounded-full border px-3 py-1 text-xs
                          peer-checked:border-primary peer-checked:text-primary
                          border-border bg-background`}
                      >
                        {t}
                      </label>
                    </div>
                  );
                })}
              </fieldset>
            )}

            {/* tags (checkbox chips) */}
            {tags.length > 0 && (
              <fieldset className="flex flex-wrap items-center gap-2">
                <legend className="mr-1 text-xs uppercase tracking-wide text-muted">Tags</legend>
                {tags.map(tg => {
                  const id = `tag-${slug(tg)}`;
                  const checked = tag.includes(tg);
                  return (
                    <div key={tg}>
                      <input
                        id={id}
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(tag, tg, setTag)}
                        className="sr-only peer"
                      />
                      <label
                        htmlFor={id}
                        className={`cursor-pointer rounded-full border px-3 py-1 text-xs
                          peer-checked:border-primary peer-checked:text-primary
                          border-border bg-background`}
                      >
                        {tg}
                      </label>
                    </div>
                  );
                })}
              </fieldset>
            )}
          </div>
        )}
      </div>

      {/* results */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted">
          Showing <strong>{filtered.length}</strong> of {allProjects.length}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-muted">
          No matches. Try clearing filters or changing your search.
        </div>
      )}
    </div>
  );
}
