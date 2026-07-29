import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-white px-6 py-7 font-sans text-black lg:px-10">
      {/* Monochrome background effect */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Logo and copyright */}
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="text-lg font-bold tracking-widest text-black transition duration-300 hover:text-black/60"
          >
            MARK P.
          </a>

          <p className="mt-2 text-sm text-black/45">
            © {currentYear} Mark Pobre. All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/MarkPobre"
            target="_blank"
            rel="noreferrer"
            aria-label="Mark Pobre GitHub profile"
            className="rounded-full border border-black/20 bg-white p-3 text-black/60 transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/markpobre/"
            target="_blank"
            rel="noreferrer"
            aria-label="Mark Pobre LinkedIn profile"
            className="rounded-full border border-black/20 bg-white p-3 text-black/60 transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="mailto:your-email@example.com"
            aria-label="Send an email to Mark Pobre"
            className="rounded-full border border-black/20 bg-white p-3 text-black/60 transition duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-black" />
    </footer>
  );
}

export default Footer;