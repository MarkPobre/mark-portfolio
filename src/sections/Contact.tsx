import { Mail, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0f0f0f] px-6 py-24 text-white lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-medium uppercase tracking-widest text-orange-500">
            Let’s work together
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Contact <span className="text-orange-500">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 text-3xl font-semibold">
              Have a project in mind?
            </h3>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
              Contact me to discuss website development, digital marketing,
              website maintenance or business system projects.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:your-email@example.com"
                className="flex items-center gap-4 text-slate-300 transition hover:text-orange-500"
              >
                <span className="rounded-full bg-[#1d1d1d] p-3 text-orange-500">
                  <Mail size={22} />
                </span>

                <span>
                  <span className="block text-sm text-slate-500">
                    Email
                  </span>

                  your-email@example.com
                </span>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <span className="rounded-full bg-[#1d1d1d] p-3 text-orange-500">
                  <MapPin size={22} />
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

          <form className="rounded-lg border border-white/10 bg-[#171717] p-7">
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
                className="w-full rounded-md border border-slate-700 bg-[#0f0f0f] px-4 py-3 text-white outline-none transition focus:border-orange-500"
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
                className="w-full rounded-md border border-slate-700 bg-[#0f0f0f] px-4 py-3 text-white outline-none transition focus:border-orange-500"
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
                className="w-full rounded-md border border-slate-700 bg-[#0f0f0f] px-4 py-3 text-white outline-none transition focus:border-orange-500"
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
                className="w-full resize-none rounded-md border border-slate-700 bg-[#0f0f0f] px-4 py-3 text-white outline-none transition focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-400"
            >
              <Send size={19} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;