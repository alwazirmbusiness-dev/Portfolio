"use client";

import { useI18n } from "@/contexts/I18nContext";
import { usePathname, useRouter } from "next/navigation";
import { PortfolioProject } from "@/lib/projects";

type ProjectCardProps = {
  project: PortfolioProject;
  onOpenGallery?: (project: PortfolioProject) => void;
};

export function ProjectCard({ project, onOpenGallery }: ProjectCardProps) {
  const { locale, t } = useI18n();
  const router = useRouter();
  const pathname = usePathname();

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
        {project.links.map((link) => {
          const isHash = link.href.startsWith("#");
          if (isHash) {
            const target = `/projects?open=${project.slug}`;
            return (
              <a
                key={link.label}
                href={target}
                onClick={(e) => {
                  e.preventDefault();
                  // if already on projects page, open gallery directly
                  if (pathname === "/projects" && onOpenGallery) {
                    onOpenGallery(project);
                    return;
                  }
                  // otherwise navigate to projects with query param
                  router.push(target);
                }}
              >
                {link.label}
              </a>
            );
          }

          return isHash ? (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ) : (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          );
        })}
      </footer>
    </article>
  );
}
