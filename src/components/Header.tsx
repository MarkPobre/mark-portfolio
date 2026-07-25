import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#projects" },
  { name: "Contact Me", href: "#contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0f0f0f]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-bold tracking-wide text-orange-500"
        >
          MARK.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition hover:text-orange-500 ${
                index === 0 ? "text-orange-500" : "text-slate-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-md bg-orange-500 px-6 py-2.5 font-semibold text-white transition hover:bg-orange-400 md:inline-block"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          className="rounded-md border border-slate-700 p-2 text-white transition hover:border-orange-500 hover:text-orange-500 md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0f0f0f] px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-2 pt-4">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-4 py-3 font-medium text-slate-300 transition hover:bg-[#1d1d1d] hover:text-orange-500"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-md bg-orange-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-orange-400"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;