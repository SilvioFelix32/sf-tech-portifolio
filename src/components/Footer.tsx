import React from "react";
import { useLanguage } from "@/context/LanguageContext/LanguageContext";
import useScrollToSection from "@/hooks/useScrollToSection";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const scrollToSection = useScrollToSection();

  const navItems = [
    { id: "home", label: t("footer_nav_home") },
    { id: "about", label: t("footer_nav_about") },
    { id: "projects", label: t("footer_nav_projects") },
    { id: "contact", label: t("footer_nav_contact") },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/40 mt-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <a
            href="#home"
            className="text-3xl font-bold tracking-tight text-foreground"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("home");
            }}
          >
            <span className="text-primary">Dev</span>Silvio
          </a>
          <nav>
            <ul className="flex flex-wrap items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            </ul>
          </nav>
      </div>

        <div className="border-t border-border/50 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Silvio Felix. {t("footer_rights")}</p>
          <p>{t("footer_built_with")}</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
