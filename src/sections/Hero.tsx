import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-20 overflow-hidden bg-white px-6 pb-16 pt-20 font-sans text-black lg:px-10"
    >
      {/* Monochrome background effects */}
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.035),transparent_55%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Hero content */}
        <div>
          <p className="mb-2 text-lg text-black/60">Hello, I am</p>

          <h1 className="mb-4 text-3xl font-semibold text-black sm:text-4xl">
            Mark Pobre
          </h1>

          <h2 className="mb-6 min-h-[72px] text-5xl font-bold leading-tight text-black sm:text-6xl">
            <TypeAnimation
              sequence={[
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

          <p className="mb-8 max-w-xl text-lg leading-8 text-black/60">
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
              className="rounded-full border border-black/30 p-3 text-black/70 transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/markpobre/"
              target="_blank"
              rel="noreferrer"
              aria-label="Mark Pobre LinkedIn profile"
              className="rounded-full border border-black/30 p-3 text-black/70 transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Send an email to Mark Pobre"
              className="rounded-full border border-black/30 p-3 text-black/70 transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Action buttons */}
          <div className="mb-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md border border-black bg-black px-7 py-3 font-semibold text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              Hire Me
            </a>

            <a
              href="/resume/mark-pobre-resume.pdf"
              download
              className="rounded-md border border-black/50 bg-white px-7 py-3 font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white"
            >
              Download CV
            </a>
          </div>

          {/* Statistics */}
          <div className="grid max-w-xl grid-cols-3 divide-x divide-black/15 rounded-lg border border-black/10 bg-black/[0.03] px-4 py-5 shadow-sm backdrop-blur">
            <div className="px-4">
              <p className="text-2xl font-bold text-black">1+</p>
              <p className="mt-1 text-sm text-black/50">Years Experience</p>
            </div>

            <div className="px-4">
              <p className="text-2xl font-bold text-black">5+</p>
              <p className="mt-1 text-sm text-black/50">
                Projects Completed
              </p>
            </div>

            <div className="px-4">
              <p className="text-2xl font-bold text-black">10+</p>
              <p className="mt-1 text-sm text-black/50">
                Digital Campaigns
              </p>
            </div>
          </div>
        </div>

        {/* Profile image */}
        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
          <div className="absolute h-[90%] w-[90%] rounded-full bg-black/10 blur-3xl" />

          <div className="relative rounded-full border border-black/40 bg-white p-2 shadow-2xl shadow-black/15">
            <div className="rounded-full border border-black/10 bg-white p-2">
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