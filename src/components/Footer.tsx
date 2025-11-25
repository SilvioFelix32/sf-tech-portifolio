
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground/5 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-heading font-bold">
              <span className="gradient-text">Dev</span>Silvio
            </a>
          </div>

          <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#home" className="nav-link text-sm">{t("Home")}</a>
            <a href="#about" className="nav-link text-sm">{t("Sobre")}</a>
            <a href="#projects" className="nav-link text-sm">{t("Projetos")}</a>
            <a href="#contact" className="nav-link text-sm">{t("Contato")}</a>
          </nav>
        </div>

        <div className="border-t border-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Silvio Félix. {t("Todos os direitos reservados.")}
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            {t("Desenvolvido com ❤️ e React")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
