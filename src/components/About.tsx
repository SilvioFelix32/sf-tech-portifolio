import React from "react";
import { useLanguage } from "@/context/LanguageContext/LanguageContext";
import TechStackSection from "@/components/TechStack/TechStackSection";

const About: React.FC = () => {
  const { t } = useLanguage();
  const educationItems = [
    t("about_education_item_1"),
    t("about_education_item_2"),
    t("about_education_item_3"),
    t("about_education_item_4"),
    t("about_education_item_5"),
    t("about_education_item_6"),
    t("about_education_item_7"),
    t("about_education_item_8"),
    t("about_education_item_9"),
    t("about_education_item_10"),
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 max-w-6xl mx-auto relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10">
        <div className="mb-16 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            {t("about_badge")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            {t("about_title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about_p1_senior")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about_p2_senior")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about_p3_senior")}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">{t("about_education")}</p>
            <div className="p-5 rounded-xl bg-card border border-border/50">
              <ul className="relative space-y-4 before:absolute before:left-2.5 before:top-1 before:h-[calc(100%-0.5rem)] before:w-px before:bg-border/70">
                {educationItems.map((item) => (
                  <li key={item} className="relative pl-8">
                    <span className="absolute left-0 top-1.5 h-5 w-5 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <TechStackSection />
      </div>
    </section>
  );
};

export default About;
