import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] px-6 py-8 text-white lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="text-xl font-bold tracking-wide text-orange-500"
          >
            MARK.
          </a>

          <p className="mt-2 text-sm text-slate-500">
            © {currentYear} Mark Pobre. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-orange-500 hover:text-orange-500"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-orange-500 hover:text-orange-500"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="mailto:your-email@example.com"
            aria-label="Send an email"
            className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:border-orange-500 hover:text-orange-500"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;