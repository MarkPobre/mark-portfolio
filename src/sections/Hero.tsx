import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#0f0f0f] px-6 pb-16 pt-28 text-white lg:px-10"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-lg text-slate-400">
            Hello, I am
          </p>

          <h1 className="mb-4 text-3xl font-semibold sm:text-4xl">
            Mark Pobre
          </h1>

          <h2 className="mb-6 min-h-[72px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "Web Developer",
                2000,
                "Digital Marketing Specialist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={60}
              repeat={Infinity}
            />
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
            I create responsive websites, web applications and digital systems
            that help businesses improve their online presence and workflows.
          </p>

          {/* Social links */}
          <div className="mb-8 flex gap-4">
            <a
              href="https://github.com/MarkPobre"
              target="_blank"
              rel="noreferrer"
              aria-label="Mark Pobre GitHub profile"
              className="rounded-full border border-blue-500/40 p-3 text-slate-400 transition duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-400 hover:to-indigo-500 hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/markpobre/"
              target="_blank"
              rel="noreferrer"
              aria-label="Mark Pobre LinkedIn profile"
              className="rounded-full border border-blue-500/40 p-3 text-slate-400 transition duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-400 hover:to-indigo-500 hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Send an email to Mark Pobre"
              className="rounded-full border border-blue-500/40 p-3 text-slate-400 transition duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-400 hover:to-indigo-500 hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Action buttons */}
          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:via-cyan-400 hover:to-indigo-400 hover:shadow-blue-500/30"
            >
              Hire Me
            </a>

            <a
              href="/resume/mark-pobre-resume.pdf"
              download
              className="rounded-md border border-blue-500/50 px-7 py-3 font-semibold text-slate-300 transition duration-300 hover:border-cyan-400 hover:bg-blue-500/10 hover:text-cyan-400"
            >
              Download CV
            </a>
          </div>

          {/* Statistics */}
          <div className="grid max-w-xl grid-cols-3 divide-x divide-slate-700 rounded-lg border border-white/5 bg-[#171717]/80 px-4 py-5 backdrop-blur">
            <div className="px-4">
              <p className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                1+
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Years Experience
              </p>
            </div>

            <div className="px-4">
              <p className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-2xl font-bold text-transparent">
                5+
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Projects Completed
              </p>
            </div>

            <div className="px-4">
              <p className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
                10+
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Digital Campaigns
              </p>
            </div>
          </div>
        </div>

        {/* Profile image */}
        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
          <div className="absolute h-[90%] w-[90%] rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-400/20 to-indigo-500/20 blur-3xl" />

          <div className="relative rounded-full bg-gradient-to-br from-blue-600 via-cyan-400 to-indigo-500 p-1.5 shadow-2xl shadow-blue-500/20">
            <div className="rounded-full bg-[#1b1b1b] p-2">
              <img
                src="/images/profile.jpeg"
                alt="Mark Pobre"
                className="h-72 w-72 rounded-full object-cover object-top sm:h-96 sm:w-96 lg:h-[460px] lg:w-[460px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;