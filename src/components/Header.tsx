import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About Me", href: "#about", id: "about" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Portfolio", href: "#projects", id: "projects" },
  { name: "Contact Me", href: "#contact", id: "contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let animationFrameId: number;

    function updateActiveSection() {
      const triggerPoint = window.innerHeight * 0.35;
      let currentSection = "home";

      for (const link of navigationLinks) {
        const section = document.getElementById(link.id);

        if (!section) {
          continue;
        }

        const sectionPosition = section.getBoundingClientRect();

        if (
          sectionPosition.top <= triggerPoint &&
          sectionPosition.bottom > triggerPoint
        ) {
          currentSection = link.id;
          break;
        }
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (isAtBottom) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    }

    function handleScroll() {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function handleNavigationClick(sectionId: string) {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/85 font-sans shadow-sm shadow-black/5 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavigationClick("home")}
          className="text-lg font-bold tracking-widest text-black transition duration-300 hover:text-black/60"
        >
          MARK P.
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavigationClick(link.id)}
                aria-current={isActive ? "page" : undefined}
                className="group relative py-1.5 text-sm font-medium"
              >
                <span
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-black"
                      : "text-black/50 group-hover:text-black"
                  }`}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left bg-black transition-transform duration-300 ease-out ${
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
          onClick={() => handleNavigationClick("contact")}
          className="hidden items-center rounded-md border border-black bg-black px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black lg:inline-flex"
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
          className="rounded-md border border-black/25 p-1.5 text-black/70 transition duration-300 hover:border-black hover:bg-black hover:text-white lg:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="border-t border-black/10 bg-white/95 px-6 pb-5 shadow-lg shadow-black/5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1.5 pt-3">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavigationClick(link.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md border px-4 py-2.5 text-sm font-medium transition duration-300 ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-transparent text-black/60 hover:border-black/20 hover:bg-black/5 hover:text-black"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={() => handleNavigationClick("contact")}
              className="mt-2 rounded-md border border-black bg-black px-4 py-2.5 text-center text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
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