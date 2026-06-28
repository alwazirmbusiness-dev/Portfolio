"use client";

import { useI18n } from "@/contexts/I18nContext";
import { PortfolioProject } from "@/lib/projects";

type ProjectCardProps = {
  project: PortfolioProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, t } = useI18n();

  return (
    <article className="project-card animate-rise" style={{ animationDelay: "120ms" }}>
      <header className="project-card-header">
        <p className={`project-badge ${project.type === "company" ? "company" : "personal"}`}>
          {project.type === "company" ? t.projectCard.company : t.projectCard.personal}
        </p>
        <h3>{project.title[locale]}</h3>
      </header>

      <p className="project-summary">{project.summary[locale]}</p>

      <ul className="stack-list">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <ul className="impact-list">
        {project.impact[locale].map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <footer className="project-links">
        {project.links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </footer>
    </article>
  );
}
