import React, { useEffect, useMemo, useState } from "react";
import { Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext/LanguageContext";
import useScrollToSection from "@/hooks/useScrollToSection";

const CV_FILES: Record<"pt" | "en", string> = {
  pt: "/Curriculo_Silvio_Felix.pdf",
  en: "/Silvio_Felix_CV_English.pdf",
};

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const { t, language } = useLanguage();
  const scrollToSection = useScrollToSection();
  const cvHref = CV_FILES[language];

  const roles = useMemo(
    () => [
      t("hero_role_1"),
      t("hero_role_2"),
      t("hero_role_3"),
      t("hero_role_4"),
    ],
    [t]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((index) => (index + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center px-6 lg:px-8 max-w-6xl mx-auto pt-12 pb-12 mb-6 relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20 relative z-10">
        <div className="flex-1 max-w-2xl order-2 lg:order-1 text-center lg:text-left">
          <p className="inline-flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-300 font-medium mb-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/40 dark:border-emerald-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-300 animate-pulse" />
            {t("hero_available")}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-4 text-balance">
            <span className="block text-[20px] font-medium text-muted-foreground mb-3">
              {t("hero_greeting")}
            </span>
            <span className="text-primary">Silvio Felix</span>
          </h1>

          <p
            className={`text-xl sm:text-2xl lg:text-3xl font-medium mb-8 transition-all duration-300 text-muted-foreground ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {roles[roleIndex]}
          </p>

          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            {t("hero_description_senior")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("projects");
              }}
            >
              {t("hero_view_projects")}
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 text-sm font-semibold rounded-full hover:bg-secondary/50 hover:border-muted-foreground/50 transition-all duration-300 hover:-translate-y-0.5"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("about");
              }}
            >
              {t("hero_about_me")}
            </a>
            <a
              href={cvHref}
              download
              aria-label={t("hero_download_cv")}
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 text-sm font-semibold rounded-full hover:bg-secondary/50 hover:border-muted-foreground/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              {t("hero_download_cv")}
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-2xl" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 to-transparent" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
              <img
                src="/silvio.jpg"
                alt="Silvio Felix"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
