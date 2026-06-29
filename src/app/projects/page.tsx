"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { useI18n } from "@/contexts/I18nContext";
import { projects } from "@/lib/projects";
import { useState, useEffect } from "react";
import GalleryModal from "@/components/GalleryModal";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const { t } = useI18n();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryTitle, setGalleryTitle] = useState<string | undefined>(undefined);

  const openGalleryForProject = (project: any) => {
    // Prefer a screenshots array on the project
    if (project.screenshots && project.screenshots.length > 0) {
      setGalleryImages(project.screenshots);
    } else if (project.slug === "restaurant-qr-system") {
      // backward-compatible fallback
      setGalleryImages(Array.from({ length: 15 }).map((_, i) => `/screenshots/${i + 1}.png`));
    } else {
      setGalleryImages([]);
    }

    setGalleryTitle(project.title?.en || project.slug);
    setGalleryOpen(true);
  };

  const router = useRouter();

  useEffect(() => {
    // read query param from the actual browser location to avoid Next prerender CSR bailout
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("open");
    if (slug) {
      const project = projects.find((p) => p.slug === slug);
      if (project) {
        openGalleryForProject(project);
        // remove query param to avoid reopening on back/refresh
        // use replace so history isn't cluttered
        router.replace("/projects");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <ProjectCard key={project.slug} project={project} onOpenGallery={openGalleryForProject} />
          ))}
        </section>

        {/* Screenshots grid removed — images are shown only via the GalleryModal when opened from a project card */}

        <GalleryModal
          open={galleryOpen}
          images={galleryImages}
          title={galleryTitle}
          onClose={() => setGalleryOpen(false)}
        />
      </div>
    </main>
  );
}
