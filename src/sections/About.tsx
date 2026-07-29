import { ArrowRight, Database, Mail } from "lucide-react";
import {
  SiGoogleads,
  SiJavascript,
  SiMeta,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <SiReact size={19} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={19} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={19} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={19} />,
  },
  {
    name: "WordPress",
    icon: <SiWordpress size={19} />,
  },
  {
    name: "Zoho CRM",
    icon: <Database size={19} />,
  },
  {
    name: "Google Ads",
    icon: <SiGoogleads size={19} />,
  },
  {
    name: "Meta Ads",
    icon: <SiMeta size={19} />,
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-[#f7f7f7] px-6 py-24 font-sans text-black lg:px-10"
    >
      {/* Monochrome background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.025),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-medium uppercase tracking-widest text-black/50">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold text-black sm:text-5xl">
            About Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-black" />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Profile image */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-xl border border-black/20" />

            <div className="relative overflow-hidden rounded-xl border border-black/30 bg-white p-1 shadow-2xl shadow-black/10">
              <div className="overflow-hidden rounded-lg bg-white">
                <img
                  src="/images/profile.jpeg"
                  alt="Mark Pobre"
                  className="h-[500px] w-full object-cover object-top grayscale transition duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          {/* About content */}
          <div>
            <p className="mb-3 text-lg font-medium text-black/60">
              Frontend Developer and Digital Marketing Specialist
            </p>

            <h3 className="mb-6 text-3xl font-bold leading-tight text-black sm:text-4xl">
              I create websites and digital systems that support business
              growth.
            </h3>

            <div className="space-y-5 text-lg leading-8 text-black/60">
              <p>
                I have experience supporting website management, digital
                marketing, online advertising, CRM systems, social media and
                business workflows.
              </p>

              <p>
                I enjoy creating responsive and user-friendly websites that
                help businesses improve their online presence and make their
                processes easier to manage.
              </p>

              <p>
                I am continuously improving my skills in React, TypeScript,
                JavaScript and modern web application development while
                applying my experience in digital marketing and business
                systems.
              </p>
            </div>

            {/* Skill tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-md border border-black/20 bg-white px-4 py-2.5 text-black/70 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
                >
                  <span className="text-black/70 transition duration-300 group-hover:text-white">
                    {skill.icon}
                  </span>

                  <span className="text-sm font-medium">{skill.name}</span>
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-md border border-black bg-black px-7 py-3 font-semibold text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
              >
                View My Work

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-md border border-black/50 bg-white px-7 py-3 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
              >
                <Mail size={19} />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;