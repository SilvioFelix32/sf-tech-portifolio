import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  titleKey: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repos: { label: string; url: string }[];
}

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      titleKey: "Financial Wallet",
      descriptionKey: "financial_wallet_description",
      image: "/financial_wallet.png",
      tags: ["Next.js", "TypeScript", "NestJS", "Prisma", "AWS Cognito", "PostgreSQL"],
      liveUrl: "https://financial-wallet-front.vercel.app/",
      repos: [
        { label: "Frontend", url: "https://github.com/SilvioFelix32/financial-wallet-front" },
        { label: "Backend", url: "https://github.com/SilvioFelix32/financial-wallet-backend" }
      ]
    },
    {
      titleKey: "SF Tech E-commerce",
      descriptionKey: "sf_tech_description",
      image: "/sf_tech_site.png",
      tags: ["Next.js", "React", "TypeScript", "NestJS", "Spring Boot", "Prisma", "Redis", "AWS Cognito"],
      liveUrl: "https://sf-tech-front.vercel.app/",
      repos: [
        { label: "Frontend", url: "https://github.com/SilvioFelix32/sf-tech-front" },
        { label: "Backend Node", url: "https://github.com/SilvioFelix32/sf-tech-back" },
        { label: "Backend Java", url: "https://github.com/SilvioFelix32/sf-tech-sales-api" }
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">{t("Meus Projetos")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover animate-fade-in flex flex-col h-full" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-accent/20 to-blue-500/20 flex items-center justify-center">
                {project.image !== "/placeholder.svg" ? (
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl opacity-50">💻</div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle>{t(project.titleKey)}</CardTitle>
                </div>
                <CardDescription>{t(project.descriptionKey)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-secondary text-xs font-medium px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-3 mt-auto">
                {project.repos.map((repo, repoIndex) => (
                  <a
                    key={repoIndex}
                    href={repo.url}
                    target="_blank"
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm"
                    rel="noopener noreferrer"
                    aria-label={`Ver código ${repo.label} do projeto ${t(project.titleKey)}`}
                  >
                    <Github size={16} className="mr-1" /> {repo.label}
                  </a>
                ))}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors text-sm"
                    rel="noopener noreferrer"
                    aria-label={`Ver demonstração do projeto ${t(project.titleKey)}`}
                  >
                    <Globe size={16} className="mr-1" /> {t("Demo")}
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="group"
            onClick={() => window.open('https://github.com/SilvioFelix32?tab=repositories', '_blank')}
          >
            {t("Ver mais projetos")}
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
