import { Mail, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[#f7f7f7] px-6 py-24 font-sans text-black lg:px-10"
    >
      {/* Monochrome background effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.025),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-medium uppercase tracking-widest text-black/50">
            Let&apos;s work together
          </p>

          <h2 className="text-4xl font-bold text-black sm:text-5xl">
            Contact Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-black" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Contact information */}
          <div>
            <p className="mb-3 font-medium text-black/50">Get in touch</p>

            <h3 className="mb-5 text-3xl font-semibold text-black sm:text-4xl">
              Have a project in mind?
            </h3>

            <p className="mb-8 max-w-xl text-lg leading-8 text-black/60">
              Contact me to discuss website development, digital marketing,
              website maintenance or business system projects.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-4 text-black/70 transition duration-300 hover:text-black"
              >
                <span className="rounded-full border border-black/20 bg-white p-3 text-black shadow-sm transition duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <Mail size={22} />
                </span>

                <span>
                  <span className="block text-sm text-black/40">Email</span>

                  your-email@example.com
                </span>
              </a>

              <div className="group flex items-center gap-4 text-black/70">
                <span className="rounded-full border border-black/20 bg-white p-3 text-black shadow-sm transition duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <MapPin size={22} />
                </span>

                <span>
                  <span className="block text-sm text-black/40">Location</span>

                  Philippines
                </span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className="relative overflow-hidden rounded-xl border border-black/15 bg-white p-7 shadow-xl shadow-black/5">
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-black/[0.03] blur-3xl" />

            <div className="relative z-10">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block font-medium text-black/70"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border border-black/20 bg-[#f7f7f7] px-4 py-3 text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-black/70"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your-email@example.com"
                  className="w-full rounded-md border border-black/20 bg-[#f7f7f7] px-4 py-3 text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block font-medium text-black/70"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project enquiry"
                  className="w-full rounded-md border border-black/20 bg-[#f7f7f7] px-4 py-3 text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-black/70"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-md border border-black/20 bg-[#f7f7f7] px-4 py-3 text-black outline-none transition duration-300 placeholder:text-black/30 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md border border-black bg-black px-6 py-3 font-semibold text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
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