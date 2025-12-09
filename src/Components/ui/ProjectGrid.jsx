import React, { useMemo, useState } from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

// A clean, card-based layout for showcasing projects
export const ProjectGrid = ({ projects = [] }) => {
  const initialVisible = useMemo(
    () => Math.min(projects.length, 3),
    [projects.length]
  );
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  const getTechLabel = (tech) => {
    const fileName = tech?.split("/").pop() || "";
    return fileName.split(".")[0] || "Tech";
  };

  const visibleProjects = projects.slice(0, visibleCount);

  const handleToggle = () => {
    setVisibleCount((prev) =>
      prev >= projects.length ? Math.min(projects.length, 3) : projects.length
    );
  };

  const shouldShowToggle = projects.length > initialVisible;

  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <article
            key={`${project.name}-${index}`}
            className="group relative overflow-hidden rounded-2xl border border-gray-800/60 bg-gradient-to-b from-neutral-900/70 via-black to-black shadow-md shadow-purple-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/20"
          >
            <div className="absolute inset-0 opacity-0 blur-xl transition duration-500 group-hover:opacity-20 group-hover:blur-2xl bg-gradient-to-r from-purple-500/40 via-fuchsia-500/30 to-blue-500/30" />

            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
              <img
                src={project.src}
                alt={project.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                draggable={false}
              />
            </div>

            <div className="relative space-y-3 p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-white">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/5 p-2 text-gray-200 transition hover:bg-white/10"
                    >
                      <IconBrandGithub className="h-4 w-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/5 p-2 text-gray-200 transition hover:bg-white/10"
                    >
                      <IconExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm leading-relaxed text-gray-400">
                {project.quote}
              </p>

              {project.techStack?.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[11px] text-gray-200"
                    >
                      <img
                        src={tech}
                        alt={getTechLabel(tech)}
                        title={getTechLabel(tech)}
                        className="h-4 w-4 object-contain"
                        draggable={false}
                      />
                      <span className="text-[11px] text-gray-300">
                        {getTechLabel(tech)}
                      </span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {shouldShowToggle && (
        <div className="flex justify-center">
          <button
            onClick={handleToggle}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-100 transition hover:border-white/20 hover:bg-white/10"
          >
            {visibleCount >= projects.length ? "Show less" : "Show all projects"}
          </button>
        </div>
      )}
    </div>
  );
};
