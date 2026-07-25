import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#151515] px-6 py-24 text-white lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-medium uppercase tracking-widest text-orange-500">
            My recent work
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Featured <span className="text-orange-500">Projects</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-lg border border-white/10 bg-[#1d1d1d] transition hover:-translate-y-1 hover:border-orange-500"
            >
              <div className="flex h-56 items-center justify-center bg-[#242424]">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <p className="absolute text-sm text-slate-500">
                  Project screenshot
                </p>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mb-5 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-slate-700 px-3 py-1 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-medium text-orange-500 hover:text-orange-400"
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
                      className="flex items-center gap-2 font-medium text-slate-300 hover:text-white"
                    >
                      <FaGithub size={18} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;