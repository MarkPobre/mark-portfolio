import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-blue-500/20 bg-[#0a0a0a] px-6 py-8 text-white lg:px-10">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-xl font-bold tracking-wide text-transparent"
          >
            MARK P.
          </a>

          <p className="mt-2 text-sm text-slate-500">
            © {currentYear} Mark Pobre. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/MarkPobre"
            target="_blank"
            rel="noreferrer"
            aria-label="Mark Pobre GitHub profile"
            className="rounded-full border border-blue-500/30 p-3 text-slate-400 transition duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-400 hover:to-indigo-500 hover:text-white"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/markpobre/"
            target="_blank"
            rel="noreferrer"
            aria-label="Mark Pobre LinkedIn profile"
            className="rounded-full border border-blue-500/30 p-3 text-slate-400 transition duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-400 hover:to-indigo-500 hover:text-white"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="mailto:your-email@example.com"
            aria-label="Send an email to Mark Pobre"
            className="rounded-full border border-blue-500/30 p-3 text-slate-400 transition duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:via-cyan-400 hover:to-indigo-500 hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500" />
    </footer>
  );
}

export default Footer;