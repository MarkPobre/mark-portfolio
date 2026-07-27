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
      className="relative overflow-hidden bg-[#151515] px-6 py-24 text-white lg:px-10"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text font-medium uppercase tracking-widest text-transparent">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500" />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-xl bg-gradient-to-br from-blue-600 via-cyan-400 to-indigo-500 p-[2px]">
              <div className="h-full w-full rounded-xl bg-[#151515]" />
            </div>

            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 via-cyan-400 to-indigo-500 p-1 shadow-2xl shadow-blue-500/20">
              <div className="overflow-hidden rounded-lg bg-[#1d1d1d]">
                <img
                  src="/images/profile.jpeg"
                  alt="Mark Pobre"
                  className="h-[500px] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-lg font-medium text-transparent">
              Frontend Developer and Digital Marketing Specialist
            </p>

            <h3 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
              I create websites and digital systems that support business
              growth.
            </h3>

            <div className="space-y-5 text-lg leading-8 text-slate-400">
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

            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="group flex items-center gap-2 rounded-md border border-blue-500/30 bg-[#1d1d1d]/80 px-4 py-2.5 text-slate-300 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-blue-500/10 hover:text-cyan-400"
                >
                  <span className="text-blue-400 transition duration-300 group-hover:text-cyan-400">
                    {skill.icon}
                  </span>

                  <span className="text-sm font-medium">{skill.name}</span>
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:via-cyan-400 hover:to-indigo-400 hover:shadow-blue-500/30"
              >
                View My Work

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-md border border-blue-500/50 px-7 py-3 font-semibold text-slate-300 transition duration-300 hover:border-cyan-400 hover:bg-blue-500/10 hover:text-cyan-400"
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