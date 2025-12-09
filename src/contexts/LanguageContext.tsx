import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, { pt: string; en: string }> = {
  // Navbar
  "Home": {
    pt: "Home",
    en: "Home"
  },
  "Sobre": {
    pt: "Sobre",
    en: "About"
  },
  "Projetos": {
    pt: "Projetos",
    en: "Projects"
  },
  "Contato": {
    pt: "Contato",
    en: "Contact"
  },
  "Experiências": {
    pt: "Experiências",
    en: "Experience"
  },

  // Hero
  "Olá, meu nome é": {
    pt: "Olá, meu nome é",
    en: "Hi, my name is"
  },
  "Desenvolvedor Full-Stack": {
    pt: "Desenvolvedor Full-Stack",
    en: "Full-Stack Developer"
  },
  "hero_description": {
    pt: "Atuo como desenvolvedor Full-Stack, utilizando minha experiência em frontend e backend para criar soluções eficientes e escaláveis, focando sempre em uma boa arquitetura de software, boas práticas de desenvolvimento e testes.",
    en: "I work as a Full-Stack Developer, using my experience in frontend and backend to build efficient and scalable solutions, always focusing on solid software architecture, best development practices, and testing."
  },
  "Ver Projetos": {
    pt: "Ver Projetos",
    en: "View Projects"
  },
  "Baixar CV": {
    pt: "Baixar CV",
    en: "Download CV"
  },

  // About
  "Sobre Mim": {
    pt: "Sobre Mim",
    en: "About Me"
  },
  "first_paragraph": {
    pt: "Olá! Sou Silvio Félix, desenvolvedor Full-Stack com experiência sólida em React, Node.js, TypeScript e Java. Desde 2020, atuo construindo aplicações web escaláveis e de alta performance, com foco em arquitetura limpa, código bem testado e práticas de engenharia de software como SOLID e Clean Code.",
    en: "Hi! I'm Silvio Félix, a Full-Stack Developer with solid experience in React, Node.js, TypeScript, and Java. Since 2020, I've been building scalable, high-performance web applications, focusing on clean architecture, well-tested code, and software engineering practices like SOLID and Clean Code."
  },
  "second_paragraph": {
    pt: "Na SysMap Solutions, atuo em times focados em autenticação e sistemas de alta criticidade, desenvolvendo APIs robustas com Node.js, Express, Fastify, NestJS e Java. No frontend, trabalho com React e Styled Components. Tenho experiência com AWS Lambda, Cognito, API Gateway, S3, Docker e Kubernetes.",
    en: "At SysMap Solutions, I work in teams focused on authentication and high-criticality systems, developing robust APIs with Node.js, Express, Fastify, NestJS, and Java. On the frontend, I work with React and Styled Components. I have experience with AWS Lambda, Cognito, API Gateway, S3, Docker, and Kubernetes."
  },
  "third_paragraph": {
    pt: "Tenho experiência com diversos bancos de dados como PostgreSQL, MySQL, MongoDB, OracleDB, DynamoDB e ScyllaDB. Utilizo ferramentas de monitoramento como Kibana, Grafana e SonarQube, além de pipelines CI/CD com GitHub Actions e Jenkins. Busco sempre evoluir como engenheiro de software completo.",
    en: "I have experience with various databases such as PostgreSQL, MySQL, MongoDB, OracleDB, DynamoDB, and ScyllaDB. I use monitoring tools like Kibana, Grafana, and SonarQube, as well as CI/CD pipelines with GitHub Actions and Jenkins. I'm constantly evolving as a well-rounded software engineer."
  },
  "Minhas Habilidades": {
    pt: "Minhas Habilidades",
    en: "My Skills"
  },
  "Educação": {
    pt: "Educação & Certificações",
    en: "Education & Certifications"
  },

  "first_education": {
    pt: "Engenharia de Software (CST) - Em Andamento",
    en: "Bachelor's Degree in Software Engineering (in progress)"
  },
  "first_education_date": {
    pt: "Estácio",
    en: "Estácio"
  },

  "second_education": {
    pt: "IA para Devs - Como extrair o máximo com IA",
    en: "AI for Developers - How to get the most out of AI"
  },
  "second_education_date": {
    pt: "Udemy",
    en: "Udemy"
  },

  "third_education": {
    pt: "JavaScript Funcional e Reativo",
    en: "Functional and Reactive JavaScript"
  },
  "third_education_date": {
    pt: "Udemy",
    en: "Udemy"
  },

  "fourth_education": {
    pt: "AI Literacy",
    en: "AI Literacy"
  },
  "fourth_education_date": {
    pt: "Triggo.AI",
    en: "Triggo.AI"
  },

  "fifth_education": {
    pt: "AWS Lambda & Serverless - Developer Guide with Hands-on Labs",
    en: "AWS Lambda & Serverless - Developer Guide with Hands-on Labs"
  },
  "fifth_education_date": {
    pt: "Udemy",
    en: "Udemy"
  },

  "sixth_education": {
    pt: "Curso de Java",
    en: "Java Course"
  },
  "sixth_education_date": {
    pt: "Rocketseat",
    en: "Rocketseat"
  },

  "seventh_education": {
    pt: "Docker para Desenvolvedores (com Docker Swarm e Kubernetes)",
    en: "Docker for Developers (with Docker Swarm and Kubernetes)"
  },
  "seventh_education_date": {
    pt: "Udemy",
    en: "Udemy"
  },

  "eighth_education": {
    pt: "TypeScript do Básico ao Avançado (c/ React, Express)",
    en: "TypeScript from Basic to Advanced (with React, Express)"
  },
  "eighth_education_date": {
    pt: "Udemy",
    en: "Udemy"
  },

  "ninth_education": {
    pt: "Node.js Microservices: NestJS, RabbitMQ e Cloud Services",
    en: "Node.js Microservices: NestJS, RabbitMQ and Cloud Services"
  },
  "ninth_education_date": {
    pt: "Udemy",
    en: "Udemy"
  },

  "tenth_education": {
    pt: "Curso Web Moderno Completo com JavaScript + Projetos",
    en: "Modern Web Development with JavaScript + Projects"
  },
  "tenth_education_date": {
    pt: "Udemy",
    en: "Udemy"
  },

  // Experience
  "sysmap_auth_empresa": {
    pt: "SysMap Solutions",
    en: "SysMap Solutions"
  },
  "sysmap_auth_cargo": {
    pt: "Analista Desenvolvedor Full-Stack",
    en: "Full-Stack Developer Analyst"
  },
  "sysmap_auth_periodo": {
    pt: "Dezembro 2023 – Presente",
    en: "December 2023 – Present"
  },
  "sysmap_auth_descricao": {
    pt: "Atuando em time focado em autenticação. Frontend com React e Styled Components. Backend com Node.js, Express, Fastify, Zod, TypeORM, Java e testes unitários com Jest e Mockito. Trabalhando com AWS Lambda, Cognito, API Gateway, S3 e bancos de dados como ScyllaDB, OracleDB, PostgreSQL e MySQL.",
    en: "Working in an authentication-focused team. Frontend with React and Styled Components. Backend with Node.js, Express, Fastify, Zod, TypeORM, Java, and unit tests with Jest and Mockito. Working with AWS Lambda, Cognito, API Gateway, S3, and databases such as ScyllaDB, OracleDB, PostgreSQL, and MySQL."
  },
  "sysmap_auth_tecnologias": {
    pt: "React.js, Styled Components, Node.js, Express, Fastify, Zod, TypeORM, Java, Jest, JUnit, Mockito, AWS Lambda, API Gateway, S3, ScyllaDB, OracleDB, PostgreSQL, MySQL, Kibana, Grafana, SonarQube",
    en: "React.js, Styled Components, Node.js, Express, Fastify, Zod, TypeORM, Java, Jest, JUnit, Mockito, AWS Lambda, API Gateway, S3, ScyllaDB, OracleDB, PostgreSQL, MySQL, Kibana, Grafana, SonarQube"
  },

  "freelancer_ecommerce_empresa": {
    pt: "SF Tech",
    en: "SF Tech"
  },
  "freelancer_ecommerce_cargo": {
    pt: "Desenvolvedor Full-Stack",
    en: "Full-Stack Developer"
  },
  "freelancer_ecommerce_periodo": {
    pt: "Projetos Diversos",
    en: "Various Projects"
  },
  "freelancer_ecommerce_descricao": {
    pt: "Atuei como Desenvolvedor Full-Stack em projeto e-commerce. Frontend com React e Styled Components. Backend com API robusta usando Node.js, Nest.js e Jest para testes unitários. Docker para orquestração de containers, PostgreSQL como banco de dados e autenticação com AWS Cognito.",
    en: "Worked as a Full-Stack Developer on an e-commerce project. Frontend with React and Styled Components. Backend with a robust API using Node.js, Nest.js, and Jest for unit testing. Docker for container orchestration, PostgreSQL as the database, and authentication with AWS Cognito."
  },
  "freelancer_ecommerce_tecnologias": {
    pt: "TypeScript, React.js, Styled Components, Node.js, Nest.js, Jest, Docker, PostgreSQL, AWS Cognito",
    en: "TypeScript, React.js, Styled Components, Node.js, Nest.js, Jest, Docker, PostgreSQL, AWS Cognito"
  },

  "sysmap_2022_empresa": {
    pt: "SysMap Solutions",
    en: "SysMap Solutions"
  },
  "sysmap_2022_cargo": {
    pt: "Analista Desenvolvedor Full-Stack",
    en: "Full-Stack Developer Analyst"
  },
  "sysmap_2022_periodo": {
    pt: "Março 2022 – Junho 2022",
    en: "March 2022 – June 2022"
  },
  "sysmap_2022_descricao": {
    pt: "Atuei com foco no backend. Frontend com React e Styled Components. Backend desenvolvendo APIs robustas para gerenciar grande volume de cadastros de usuários usando Node.js, Express, Mocha e Chai para testes. Docker e Kubernetes para orquestração de containers, PostgreSQL e MySQL.",
    en: "Worked with a backend focus. Frontend with React and Styled Components. Backend developing robust APIs to manage large volumes of user registrations using Node.js, Express, Mocha, and Chai for testing. Docker and Kubernetes for container orchestration, PostgreSQL and MySQL."
  },
  "sysmap_2022_tecnologias": {
    pt: "TypeScript, React.js, Styled Components, Node.js, Express, Mocha, Chai, Docker, Kubernetes, PostgreSQL, MySQL, Kibana",
    en: "TypeScript, React.js, Styled Components, Node.js, Express, Mocha, Chai, Docker, Kubernetes, PostgreSQL, MySQL, Kibana"
  },

  "unisystem_empresa": {
    pt: "Uni System Automação e Tecnologia",
    en: "Uni System Automação e Tecnologia"
  },
  "unisystem_cargo": {
    pt: "Desenvolvedor Full-Stack",
    en: "Full-Stack Developer"
  },
  "unisystem_periodo": {
    pt: "Novembro 2021 – Fevereiro 2022",
    en: "November 2021 – February 2022"
  },
  "unisystem_descricao": {
    pt: "Trabalhei focado no frontend, desenvolvendo um site e-commerce completo de um parque aquático usando SASS e Next.js, criando interface totalmente responsiva. Backend desenvolvido com Nest.js.",
    en: "Worked focused on frontend, developing a complete e-commerce website for a water park using SASS and Next.js, creating a fully responsive interface. Backend developed with Nest.js."
  },
  "unisystem_tecnologias": {
    pt: "TypeScript, React.js, Next.js, Nest.js, Node.js, SASS",
    en: "TypeScript, React.js, Next.js, Nest.js, Node.js, SASS"
  },

  "freelancer_2021_empresa": {
    pt: "SF Tech",
    en: "SF Tech"
  },
  "freelancer_2021_cargo": {
    pt: "Desenvolvedor Full-Stack",
    en: "Full-Stack Developer"
  },
  "freelancer_2021_periodo": {
    pt: "Fevereiro 2021 – Novembro 2021",
    en: "February 2021 – November 2021"
  },
  "freelancer_2021_descricao": {
    pt: "Atuei em projetos frontend na criação de componentes e páginas responsivas, utilizando React.js e TypeScript. No backend, trabalhei com Node.js e Express para implementar arquiteturas limpas.",
    en: "Worked on frontend projects creating responsive components and pages using React.js and TypeScript. On the backend, I worked with Node.js and Express to implement clean architectures."
  },
  "freelancer_2021_tecnologias": {
    pt: "TypeScript, React.js, Node.js, Express, HTML, CSS",
    en: "TypeScript, React.js, Node.js, Express, HTML, CSS"
  },

  // Projects
  "Meus Projetos": {
    pt: "Meus Projetos",
    en: "My Projects"
  },
  "Financial Wallet": {
    pt: "Financial Wallet",
    en: "Financial Wallet"
  },
  "financial_wallet_description": {
    pt: "Aplicação de carteira financeira com cadastro e autenticação via AWS Cognito, funcionalidades de depósito, transferência e reversão de transações. UI funcional e responsiva com validações completas de saldo.",
    en: "Financial wallet application with registration and authentication via AWS Cognito, deposit, transfer, and transaction reversal features. Functional and responsive UI with complete balance validations."
  },
  "SF Tech E-commerce": {
    pt: "SF Tech E-commerce",
    en: "SF Tech E-commerce"
  },
  "sf_tech_description": {
    pt: "Projeto de e-commerce com Clean Architecture e Clean Code. Frontend em Next.js/React, Backend Node.js (NestJS + Prisma) para produtos com 100% de cobertura de testes, e Backend Java (Spring Boot) para gestão de vendas.",
    en: "E-commerce project with Clean Architecture and Clean Code. Frontend in Next.js/React, Node.js Backend (NestJS + Prisma) for products with 100% test coverage, and Java Backend (Spring Boot) for sales management."
  },
  "Portfolio Website": {
    pt: "Website Portfólio",
    en: "Portfolio Website"
  },
  "portfolio_description": {
    pt: "Site portfólio moderno e responsivo construído com React, TypeScript e Tailwind CSS, com suporte a múltiplos idiomas e tema dark/light.",
    en: "Modern and responsive portfolio website built with React, TypeScript, and Tailwind CSS, with multi-language support and dark/light theme."
  },
  "Código": {
    pt: "Código",
    en: "Code"
  },
  "Demo": {
    pt: "Demo",
    en: "Demo"
  },
  "Ver mais projetos": {
    pt: "Ver mais projetos",
    en: "View more projects"
  },

  // Contact
  "Vamos conversar!": {
    pt: "Vamos conversar!",
    en: "Let's talk!"
  },
  "contact_description": {
    pt: "Estou interessado em oportunidades de trabalho como desenvolvedor Full-Stack. Se você tem um projeto que precisa de um desenvolvedor experiente em frontend e backend, entre em contato comigo.",
    en: "I'm interested in job opportunities as a Full-Stack Developer. If you have a project that needs an experienced frontend and backend developer, get in touch with me."
  },
  "Nome": {
    pt: "Nome",
    en: "Name"
  },
  "Seu nome": {
    pt: "Seu nome",
    en: "Your name"
  },
  "Email": {
    pt: "Email",
    en: "Email"
  },
  "Seu email": {
    pt: "Seu email",
    en: "Your email"
  },
  "Assunto": {
    pt: "Assunto",
    en: "Subject"
  },
  "Assunto da mensagem": {
    pt: "Assunto da mensagem",
    en: "Message subject"
  },
  "Mensagem": {
    pt: "Mensagem",
    en: "Message"
  },
  "Escreva sua mensagem aqui...": {
    pt: "Escreva sua mensagem aqui...",
    en: "Write your message here..."
  },
  "Enviar Mensagem": {
    pt: "Enviar Mensagem",
    en: "Send Message"
  },
  "Enviando...": {
    pt: "Enviando...",
    en: "Sending..."
  },
  "Mensagem enviada!": {
    pt: "Mensagem enviada!",
    en: "Message sent!"
  },
  "Obrigado por entrar em contato. Responderei em breve.": {
    pt: "Obrigado por entrar em contato. Responderei em breve.",
    en: "Thank you for reaching out. I'll respond soon."
  },

  // Footer
  "Todos os direitos reservados.": {
    pt: "Todos os direitos reservados.",
    en: "All rights reserved."
  },
  "Desenvolvido com ❤️ e React": {
    pt: "Desenvolvido com ❤️ e React",
    en: "Developed with ❤️ and React"
  },

  // Theme
  "Claro": {
    pt: "Claro",
    en: "Light"
  },
  "Escuro": {
    pt: "Escuro",
    en: "Dark"
  },
  "Sistema": {
    pt: "Sistema",
    en: "System"
  },
  "Em construção": {
    pt: "Em construção",
    en: "Under construction"
  }
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => { },
  t: () => "",
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation '${key}' not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => useContext(LanguageContext);
