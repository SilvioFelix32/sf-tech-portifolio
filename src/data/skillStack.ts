export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export type SkillMacroGroup = {
  id: string;
  labelKey: string;
  categories: SkillCategory[];
};

type TranslateFn = (key: string) => string;

export const buildSkillMacroGroups = (t: TranslateFn): SkillMacroGroup[] => [
  {
    id: "development",
    labelKey: "about_stack_group_development",
    categories: [
      { id: "languages", label: "Languages", skills: ["Java", "JavaScript", "TypeScript"] },
      { id: "academic", label: t("about_academic_languages"), skills: ["C", "Python", "PHP"] },
      {
        id: "frontend",
        label: "Front-end",
        skills: ["HTML5", "CSS3", "React.js", "Next.js", "Styled-components"],
      },
      { id: "backend", label: "Back-end", skills: ["Node.js", "Express.js", "NestJS", "Spring Boot"] },
      { id: "api", label: "API Development", skills: ["REST APIs", "GraphQL"] },
      { id: "persistence", label: "Persistence", skills: ["JPA", "JDBC", "TypeORM"] },
    ],
  },
  {
    id: "architecture",
    labelKey: "about_stack_group_architecture",
    categories: [
      {
        id: "architecture-design",
        label: "Architecture & Design",
        skills: ["Clean Architecture", "SOLID", "Design Patterns", "DDD", "Microservices"],
      },
      { id: "build", label: "Build & Runtime", skills: ["Maven", "JVM", "JDK", "NPM", "Yarn"] },
    ],
  },
  {
    id: "infrastructure",
    labelKey: "about_stack_group_infrastructure",
    categories: [
      { id: "cloud", label: "Cloud", skills: ["AWS", "AWS Lambda", "API Gateway", "Amazon S3", "Amazon Cognito"] },
      { id: "containers", label: "Containers & Orchestration", skills: ["Docker", "Kubernetes"] },
      { id: "cicd", label: "CI/CD & DevOps", skills: ["GitHub Actions", "Jenkins", "CI/CD Pipelines"] },
      { id: "caching", label: "Caching", skills: ["Redis"] },
    ],
  },
  {
    id: "data-security",
    labelKey: "about_stack_group_data_security",
    categories: [
      {
        id: "databases",
        label: t("about_databases"),
        skills: ["PostgreSQL", "MySQL", "Oracle Database", "ScyllaDB", "DynamoDB", "SQL"],
      },
      {
        id: "auth",
        label: "Authentication & Security",
        skills: ["Amazon Cognito", "OAM", "OAuth2", "OIDC"],
      },
    ],
  },
  {
    id: "quality-process",
    labelKey: "about_stack_group_quality_process",
    categories: [
      { id: "testing", label: "Testing", skills: ["JUnit 5", "Mockito", "Jest", "Integration Testing"] },
      { id: "monitoring", label: "Monitoring & Quality", skills: ["Kibana", "Grafana", "SonarQube"] },
      { id: "version-control", label: "Version Control", skills: ["Git", "GitHub", "Bitbucket"] },
      { id: "collaboration", label: "Collaboration", skills: ["Jira", "Confluence"] },
      {
        id: "methodologies",
        label: "Methodologies",
        skills: ["Scrum", "Kanban", "Daily Meetings", "Sprint Planning", "Sprint Review", "Sprint Retrospectives"],
      },
    ],
  },
  {
    id: "ai",
    labelKey: "about_stack_group_ai",
    categories: [
      {
        id: "ai-assisted",
        label: "AI-Assisted Development",
        skills: [
          "Cursor AI",
          "Prompt Engineering",
          "Code Generation",
          "Code Review",
          "Refactoring",
          "Unit Test Generation",
        ],
      },
    ],
  },
];

export const flattenSkillCategories = (macroGroups: SkillMacroGroup[]): SkillCategory[] =>
  macroGroups.flatMap((group) => group.categories);
