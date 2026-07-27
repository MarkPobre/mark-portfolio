const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Website and Business Systems",
    skills: [
      "WordPress",
      "Zoho CRM",
      "Zoho Forms",
      "Responsive Design",
      "Website Maintenance",
      "Form Integration",
    ],
  },
  {
    title: "Digital Marketing",
    skills: [
      "Google Ads",
      "Meta Ads",
      "SEO",
      "Social Media Management",
      "Email Marketing",
      "Marketing Analytics",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Canva",
      "Figma",
      "Cloudflare",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0f0f0f] px-6 py-24 text-white lg:px-10"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text font-medium uppercase tracking-widest text-transparent">
            What I work with
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500" />
        </div>

        {/* Skill groups */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group relative overflow-hidden rounded-xl border border-blue-500/20 bg-[#171717]/80 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Card gradient glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-300 group-hover:bg-cyan-400/15" />

              <div className="relative z-10">
                <h3 className="mb-5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-2xl font-semibold text-transparent">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-blue-500/25 bg-[#0f0f0f]/70 px-4 py-2 text-sm text-slate-300 transition duration-300 hover:border-cyan-400 hover:bg-blue-500/10 hover:text-cyan-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;