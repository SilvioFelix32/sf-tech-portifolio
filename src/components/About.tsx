import React from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = [
  // Linguagens
  "JavaScript", "TypeScript", "Java",
  // Web
  "HTML", "CSS", "React.js", "Next.js",
  // Back-end
  "Node.js", "Express", "Nest.js", "Fastify",
  // Arquitetura
  "Microservices", "REST APIs", "Clean Architecture",
  // Mensageria
  "RabbitMQ",
  // Bancos de Dados
  "PostgreSQL", "MySQL", "MongoDB", "OracleDB", "DynamoDB", "SQL",
  // Cache
  "Redis",
  // Estilização
  "Styled Components", "Sass", "Tailwind CSS",
  // Contêineres
  "Docker", "Kubernetes",
  // Autenticação
  "AWS Cognito", "Keycloak", "OAM (OIDC/OAuth2)",
  // AWS/Cloud
  "AWS Lambda", "API Gateway", "S3",
  // Testes
  "Jest", "JUnit", "Mocha", "Chai", "Mockito",
  // Versionamento & CI/CD
  "Git", "GitHub Actions", "Jenkins", "Bitbucket",
  // Ferramentas de Colaboração
  "Jira", "Confluence",
  // Monitoramento
  "Kibana", "Grafana", "SonarQube"
];

interface AboutProps {
  experienceList?: string[];
}

const About: React.FC<AboutProps> = () => {
  const { t } = useLanguage();

  const educationItems = [
    { key: "first_education", dateKey: "first_education_date" },
    { key: "second_education", dateKey: "second_education_date" },
    { key: "third_education", dateKey: "third_education_date" },
    { key: "fourth_education", dateKey: "fourth_education_date" },
    { key: "fifth_education", dateKey: "fifth_education_date" },
    { key: "sixth_education", dateKey: "sixth_education_date" },
    { key: "seventh_education", dateKey: "seventh_education_date" },
    { key: "eighth_education", dateKey: "eighth_education_date" },
    { key: "ninth_education", dateKey: "ninth_education_date" },
    { key: "tenth_education", dateKey: "tenth_education_date" },
  ];

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title">{t("Sobre Mim")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in">
            <p className="text-lg mb-6">
              {t("first_paragraph")}
            </p>
            <p className="text-lg mb-6">
              {t("second_paragraph")}
            </p>
            <p className="text-lg">
              {t("third_paragraph")}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">{t("Minhas Habilidades")}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-accent/70 hover:bg-accent/50 text-accent-foreground dark:bg-accent/30 dark:hover:bg-accent/50 px-4 py-2 text-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-10 mb-6">{t("Educação")}</h3>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {educationItems.map((item, index) => (
                <div 
                  key={index}
                  className="border-l-2 border-accent pl-4 animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold">{t(item.key)}</h4>
                  <p className="text-muted-foreground text-sm">{t(item.dateKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
