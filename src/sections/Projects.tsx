import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-white px-6 py-24 font-sans text-black lg:px-10"
    >
      {/* Monochrome background effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.025),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-medium uppercase tracking-widest text-black/50">
            My recent work
          </p>

          <h2 className="text-4xl font-bold text-black sm:text-5xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-black" />
        </div>

        {/* Project cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-black/15 bg-[#f7f7f7] shadow-sm transition duration-300 hover:-translate-y-2 hover:border-black/40 hover:shadow-2xl hover:shadow-black/10"
            >
              {/* Project image */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-black/10 bg-[#ededed]">
                <p className="absolute text-sm text-black/35">
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
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40" />
              </div>

              {/* Project content */}
              <div className="relative p-6">
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-black/[0.03] blur-3xl transition duration-300 group-hover:bg-black/[0.06]" />

                <div className="relative z-10">
                  <h3 className="mb-3 text-2xl font-semibold text-black">
                    {project.title}
                  </h3>

                  <p className="mb-5 leading-7 text-black/60">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-black/15 bg-white px-3 py-1 text-xs font-medium text-black/60 transition duration-300 hover:border-black hover:bg-black hover:text-white"
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
                        className="flex items-center gap-2 font-medium text-black transition duration-300 hover:text-black/55"
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
                        className="flex items-center gap-2 font-medium text-black/65 transition duration-300 hover:text-black"
                      >
                        <FaGithub size={18} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-black transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;