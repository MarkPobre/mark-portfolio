import { Mail, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0f0f0f] px-6 py-24 text-white lg:px-10"
    >
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text font-medium uppercase tracking-widest text-transparent">
            Let&apos;s work together
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact information */}
          <div>
            <p className="mb-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text font-medium text-transparent">
              Get in touch
            </p>

            <h3 className="mb-5 text-3xl font-semibold sm:text-4xl">
              Have a project in mind?
            </h3>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
              Contact me to discuss website development, digital marketing,
              website maintenance or business system projects.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-4 text-slate-300 transition duration-300 hover:text-cyan-400"
              >
                <span className="rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-500 p-[1px]">
                  <span className="flex rounded-full bg-[#1d1d1d] p-3 text-cyan-400 transition duration-300 group-hover:bg-transparent group-hover:text-white">
                    <Mail size={22} />
                  </span>
                </span>

                <span>
                  <span className="block text-sm text-slate-500">
                    Email
                  </span>

                  your-email@example.com
                </span>
              </a>

              <div className="group flex items-center gap-4 text-slate-300">
                <span className="rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-500 p-[1px]">
                  <span className="flex rounded-full bg-[#1d1d1d] p-3 text-cyan-400 transition duration-300 group-hover:bg-transparent group-hover:text-white">
                    <MapPin size={22} />
                  </span>
                </span>

                <span>
                  <span className="block text-sm text-slate-500">
                    Location
                  </span>

                  Philippines
                </span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className="relative overflow-hidden rounded-xl border border-blue-500/20 bg-[#171717]/80 p-7 shadow-xl shadow-blue-950/10 backdrop-blur">
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border border-blue-500/20 bg-[#0f0f0f] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your-email@example.com"
                  className="w-full rounded-md border border-blue-500/20 bg-[#0f0f0f] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project enquiry"
                  className="w-full rounded-md border border-blue-500/20 bg-[#0f0f0f] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-md border border-blue-500/20 bg-[#0f0f0f] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:via-cyan-400 hover:to-indigo-400 hover:shadow-blue-500/30"
              >
                <Send size={19} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;