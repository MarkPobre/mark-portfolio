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
        className="bg-[#0f0f0f] px-6 py-24 text-white lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-medium uppercase tracking-widest text-orange-500">
              What I work with
            </p>
  
            <h2 className="text-4xl font-bold sm:text-5xl">
              My <span className="text-orange-500">Skills</span>
            </h2>
  
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
          </div>
  
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-white/10 bg-[#171717] p-7 transition hover:border-orange-500"
              >
                <h3 className="mb-5 text-2xl font-semibold">
                  {group.title}
                </h3>
  
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;