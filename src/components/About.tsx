import React from "react";
import { useLanguage } from "@/context/LanguageContext/LanguageContext";

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

  const skillCategories = [
    { label: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Styled Components", "TailwindCSS"] },
    { label: "Backend", skills: ["Node.js", "Express", "Fastify", "NestJS", "Java", "Spring Boot"] },
    { label: t("about_databases"), skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis", "ScyllaDB"] },
    { label: "Cloud & DevOps", skills: ["AWS Lambda", "API Gateway", "AWS Cognito", "S3", "Docker", "Kubernetes"] },
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 max-w-6xl mx-auto relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10">
        <div className="mb-20 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            {t("about_badge")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            {t("about_title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about_p1_senior")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about_p2_senior")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("about_p3_senior")}</p>

            <div className="pt-8 border-t border-border/50">
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

          <div className="lg:col-span-2 space-y-6">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-6">{t("about_stack")}</p>
            {skillCategories.map((category) => (
              <div
                key={category.label}
                className="p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <p className="text-sm font-semibold text-foreground mb-4">{category.label}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/50 text-secondary-foreground border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
