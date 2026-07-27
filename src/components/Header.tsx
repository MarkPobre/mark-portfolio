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
    <header className="fixed top-0 z-50 w-full border-b border-blue-500/20 bg-[#0f0f0f]/60 shadow-lg shadow-blue-950/20 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-xl font-bold tracking-wide text-transparent"
        >
          MARK P.
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className="group relative pb-2 font-medium"
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent"
                      : "text-slate-400 group-hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 transition-transform duration-300 ease-out ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop Hire Me button */}
        <a
          href="#contact"
          className="hidden rounded-md bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:via-cyan-400 hover:to-indigo-400 hover:shadow-blue-500/30 md:inline-block"
        >
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          className="rounded-md border border-blue-500/40 p-2 text-slate-300 transition duration-300 hover:border-cyan-400 hover:bg-blue-500/10 hover:text-cyan-400 md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="border-t border-blue-500/20 bg-[#0f0f0f]/90 px-6 pb-6 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2 pt-4">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-4 py-3 font-medium transition duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 text-white"
                      : "text-slate-300 hover:bg-blue-500/10 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-md bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 px-4 py-3 text-center font-semibold text-white transition duration-300 hover:from-blue-500 hover:via-cyan-400 hover:to-indigo-400"
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