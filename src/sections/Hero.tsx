import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0f0f0f] px-6 pb-16 pt-28 text-white lg:px-10"
    >
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-lg text-slate-400">
            Hello, I am
          </p>

          <h1 className="mb-4 text-3xl font-semibold sm:text-4xl">
            Mark Pobre
          </h1>

          <h2 className="mb-6 min-h-[72px] text-5xl font-bold text-orange-500 sm:text-6xl">
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

          <div className="mb-8 flex gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-orange-500 hover:text-orange-500"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-orange-500 hover:text-orange-500"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Send an email"
              className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-orange-500 hover:text-orange-500"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-400"
            >
              Hire Me
            </a>

            <a
              href="/resume/mark-pobre-resume.pdf"
              download
              className="rounded-md border border-slate-600 px-7 py-3 font-semibold text-slate-300 transition hover:border-orange-500 hover:text-orange-500"
            >
              Download CV
            </a>
          </div>

          <div className="grid max-w-xl grid-cols-3 divide-x divide-slate-700 bg-[#171717] px-4 py-5">
            <div className="px-4">
              <p className="text-2xl font-bold text-orange-500">
                1+
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Years Experience
              </p>
            </div>

            <div className="px-4">
              <p className="text-2xl font-bold text-orange-500">
                5+
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Projects Completed
              </p>
            </div>

            <div className="px-4">
              <p className="text-2xl font-bold text-orange-500">
                10+
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Digital Campaigns
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
          <div className="rounded-full bg-[#1b1b1b] p-3">
            <img
              src="/images/profile.jpeg"
              alt="Mark Pobre"
              className="h-72 w-72 rounded-full border-4 border-orange-500 object-cover object-top sm:h-96 sm:w-96 lg:h-[460px] lg:w-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;