import {
  CodeXml,
  Megaphone,
  PanelsTopLeft,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: CodeXml,
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
    icon: PanelsTopLeft,
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
    icon: Megaphone,
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
    icon: Wrench,
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
      className="relative scroll-mt-20 overflow-hidden bg-[#f7f7f7] px-6 py-24 font-sans text-black lg:px-10"
    >
      {/* Monochrome background effects */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.025),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-medium uppercase tracking-widest text-black/50">
            What I work with
          </p>

          <h2 className="text-4xl font-bold text-black sm:text-5xl">
            My Skills
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-black" />
        </div>

        {/* Skill groups */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="group relative overflow-hidden rounded-xl border border-black/15 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-black/40 hover:shadow-xl hover:shadow-black/10"
              >
                {/* Decorative card effect */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-black/[0.03] blur-3xl transition duration-300 group-hover:bg-black/[0.06]" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-lg border border-black/20 bg-white p-3 text-black transition duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-2xl font-semibold text-black">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-black/15 bg-[#f7f7f7] px-4 py-2 text-sm font-medium text-black/65 transition duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;