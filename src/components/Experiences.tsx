import React from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExperiencesProps {
  experienceList?: string[];
}

const experienceLogos: Record<string, string> = {
  sysmap_auth: "/sysmap_solutions.jpeg",
  sysmap_2022: "/sysmap_solutions.jpeg",
  freelancer_ecommerce: "/sf-tech_favicon.jpeg",
  freelancer_2021: "/sf-tech_favicon.jpeg",
  unisystem: "/uni_system.jpeg",
};

const Experiences: React.FC<ExperiencesProps> = ({
  experienceList = ["sysmap_auth", "freelancer_ecommerce", "sysmap_2022", "unisystem", "freelancer_2021"]
}) => {
  const { t } = useLanguage();

  const experiences = experienceList.map(key => ({
    logo: experienceLogos[key] || "/placeholder.svg",
    title: t(`${key}_cargo`) || t(`${key}_empresa`),
    company: t(`${key}_empresa`),
    period: t(`${key}_periodo`),
    description: t(`${key}_descricao`),
    technologies: t(`${key}_tecnologias`)?.split(", ") || []
  }));

  return (
    <section id="experiences" className="section bg-secondary/30">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-title">{t("Experiências")}</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card/30 rounded-lg p-6 animate-fade-in hover:bg-card/40 transition-colors border border-border/50 h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="relative overflow-hidden bg-background/50 rounded-lg flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="object-contain rounded-lg"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl font-semibold text-blue-400">{exp.title}</h4>
                  <p className="text-lg font-medium">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.period}</p>

                  <p className="mt-4 text-pretty text-sm leading-relaxed">{exp.description}</p>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-accent/5 hover:bg-accent/10 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
