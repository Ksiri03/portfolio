"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { ExternalLink, X, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PROJECTS, type Project } from "@/lib/constants";

const FILTERS = ["All", "AI", "ML", "Python", "Web"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Projects"
          subtitle="A selection of my work in AI, ML, and software engineering."
        />

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Project category filters"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                activeFilter === filter
                  ? "bg-accent text-accent-fg"
                  : "border border-border bg-surface text-fg-secondary hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg"
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title} details`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-background to-surface">
                  <div className="flex h-full items-center justify-center">
                    <Code2 className="h-12 w-12 text-fg-muted" />
                  </div>
                  {project.featured && (
                    <div className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-fg">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-medium text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-fg-secondary">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-fg-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-fg-secondary">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} details`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface p-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-fg-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-background to-surface">
                <Code2 className="h-16 w-16 text-fg-muted" />
              </div>

              <h3 className="text-2xl font-medium text-foreground">
                {selectedProject.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-fg-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-fg-secondary">
                {selectedProject.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {selectedProject.githubUrl ? (
                  <Button
                    variant="primary"
                    size="sm"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    icon={<GithubIcon className="h-4 w-4" />}
                  >
                    GitHub
                  </Button>
                ) : (
                  <div className="group relative">
                    <Button
                      variant="primary"
                      size="sm"
                      disabled
                      icon={<GithubIcon className="h-4 w-4" />}
                    >
                      GitHub
                    </Button>
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
                      Coming Soon
                    </span>
                  </div>
                )}

                {selectedProject.liveUrl ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={selectedProject.liveUrl}
                    target="_blank"
                    icon={<ExternalLink className="h-4 w-4" />}
                  >
                    Live Demo
                  </Button>
                ) : (
                  <div className="group relative">
                    <Button
                      variant="secondary"
                      size="sm"
                      disabled
                      icon={<ExternalLink className="h-4 w-4" />}
                    >
                      Live Demo
                    </Button>
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
