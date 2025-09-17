// src/app/projects/page.tsx
import Navbar from "../components/site/Navbar";
import ProjectBrowser from "../components/site/ProjectBrowser";

export const metadata = { title: "Projects" };
export const revalidate = 0;

export default function ProjectsPage() {
  return (
    
      <>
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
        <p className="mt-2 text-sm text-muted max-w-2xl">
          Filter by year, tech, or tags. Search matches titles, tech stacks, and summaries.
        </p>
        <div className="mt-8">
          <ProjectBrowser />
        </div>
      </section>
    </>
  );
}
