"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { useI18n } from "@/contexts/I18nContext";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const { t } = useI18n();

  return (
    <main>
      <div className="page-shell">
        <section className="page-header animate-rise">
          <p className="eyebrow">{t.projectsPage.kicker}</p>
          <h1>{t.projectsPage.title}</h1>
          <p>{t.projectsPage.desc}</p>
        </section>

        <div className="filter-tabs" style={{ justifyContent: "flex-start" }}>
          {t.projectsPage.tabs.map((tab, idx) => (
            <button key={tab} className={`filter-tab${idx === 0 ? " active" : ""}`}>{tab}</button>
          ))}
        </div>

        <section className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}
