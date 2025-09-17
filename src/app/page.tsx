import Navbar from "./components/site/Navbar";
import Hero from "./components/site/Hero";
import Section from "./components/site/Sections";
import ProjectTeasers from "./components/site/ProjectTeasers";
import CaseStudyTeasers from "./components/site/CaseStudyTeasers";
import Skills from "./components/site/Skills";
import Metrics from "./components/site/Metrics";
import HomeContactForm from "./components/site/HomeContactForm";

import Footer from "./components/site/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />

      <Section title="Featured Projects" subtitle="Selected builds that highlight frontend craft and web-app depth.">
        <ProjectTeasers />
      </Section>

      <Section title="Case Studies" subtitle="Process, decisions, and measurable outcomes.">
        <CaseStudyTeasers />
      </Section>

      <Section title="Skills & Tooling" subtitle="Stacks I use to ship fast, accessible, maintainable work.">
        <Skills />
      </Section>

      <Section title="Impact Highlights" subtitle="Sample outcome metrics (replace with your real numbers).">
        <Metrics />
      </Section>

      <Section title="" >
        <HomeContactForm />
      </Section>

      <Footer />
    </main>
  );
}
