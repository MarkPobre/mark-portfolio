import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#151515] px-6 py-24 text-white lg:px-10"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text font-medium uppercase tracking-widest text-transparent">
            My recent work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500" />
        </div>

        {/* Project cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-blue-500/20 bg-[#1d1d1d]/80 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Project image */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#242424]">
                <p className="absolute text-sm text-slate-500">
                  Project screenshot
                </p>

                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="relative z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent opacity-50" />
              </div>

              {/* Project content */}
              <div className="relative p-6">
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition duration-300 group-hover:bg-cyan-400/15" />

                <div className="relative z-10">
                  <h3 className="mb-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-2xl font-semibold text-transparent">
                    {project.title}
                  </h3>

                  <p className="mb-5 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-blue-500/25 bg-[#0f0f0f]/60 px-3 py-1 text-xs text-slate-300 transition duration-300 hover:border-cyan-400 hover:bg-blue-500/10 hover:text-cyan-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex flex-wrap gap-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View the live demo of ${project.title}`}
                        className="flex items-center gap-2 font-medium text-cyan-400 transition duration-300 hover:text-blue-400"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View the source code of ${project.title}`}
                        className="flex items-center gap-2 font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
                      >
                        <FaGithub size={18} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;