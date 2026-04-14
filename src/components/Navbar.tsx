import React, { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import useScrollToSection from "@/hooks/useScrollToSection";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, t } = useLanguage();
  const scrollToSection = useScrollToSection();

  const links = useMemo(
    () => [
      { label: t("Sobre"), section: "about" },
      { label: t("Experiências"), section: "experiences" },
      { label: t("Projetos"), section: "projects" },
      { label: t("Contato"), section: "contact" },
    ],
    [t]
  );

  const ctaLabel = language === "pt" ? "Fale comigo" : "Talk to me";
  const openMenuLabel = language === "pt" ? "Abrir menu" : "Open menu";
  const closeMenuLabel = language === "pt" ? "Fechar menu" : "Close menu";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    scrollToSection(sectionId);
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300"
          onClick={(event) => handleSectionClick(event, "home")}
        >
          SFTech
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.section}>
              <a
                href={`#${link.section}`}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === link.section
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
                onClick={(event) => handleSectionClick(event, link.section)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:silvio.felix32@hotmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            {ctaLabel}
          </a>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button
            className="flex items-center justify-center p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? closeMenuLabel : openMenuLabel}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-card/95 backdrop-blur-xl border-b border-border px-6 pb-6">
          <ul className="flex flex-col gap-2 pt-2">
            {links.map((link) => (
              <li key={link.section}>
                <a
                  href={`#${link.section}`}
                  className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                    activeSection === link.section
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                  onClick={(event) => handleSectionClick(event, link.section)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:silvio.felix32@hotmail.com"
            className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold rounded-full hover:bg-primary/90 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
