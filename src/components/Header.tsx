import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About Me", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Portfolio", href: "#projects", id: "projects" },
  { name: "Contact Me", href: "#contact", id: "contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function updateActiveSection() {
      const scrollPosition = window.scrollY + 180;
      let currentSection = "home";

      navigationLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = link.id;
        }
      });

      setActiveSection(currentSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

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
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                className={`group relative pb-2 font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-orange-500"
                    : "text-slate-400 hover:text-orange-500"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-orange-500 transition-transform duration-300 ease-out ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
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
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          className="rounded-md border border-slate-700 p-2 text-white transition hover:border-orange-500 hover:text-orange-500 md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0f0f0f] px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-2 pt-4">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-md px-4 py-3 font-medium transition ${
                    isActive
                      ? "bg-[#1d1d1d] text-orange-500"
                      : "text-slate-300 hover:bg-[#1d1d1d] hover:text-orange-500"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

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