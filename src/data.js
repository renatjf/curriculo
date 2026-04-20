// =============================================
// EDITE ESTE ARQUIVO COM SEUS DADOS PESSOAIS
// =============================================

export const personal = {
  nome: "Renato Freitas",
  titulo:
    "Sênior FrontEnd | Node |  React | Vue | Angular | Typescript | Projetos escaláveis | MongoDB",
  subtitulo: "Criando experiências digitais com propósito",
  foto: "https://media.licdn.com/dms/image/v2/D4D35AQGPZgVujpk35w/profile-framedphoto-shrink_400_400/B4DZ2lUVF8HwAc-/0/1776595063467?e=1777204800&v=beta&t=-3e884mT2YdMbcbXtMr6FRb9gXRa34FnnkmlTR6WsXM",
  sobre: `Sou um profissional apaixonado por tecnologia, com mais de X anos de experiência no desenvolvimento de soluções digitais robustas e escaláveis. Minha trajetória combina sólida formação técnica com visão de negócio, permitindo entregar produtos que realmente fazem diferença.

Tenho experiência liderando equipes e projetos complexos, sempre buscando as melhores práticas de engenharia de software e arquiteturas modernas. Acredito que tecnologia é meio, não fim — o que importa é o impacto gerado nas pessoas.`,
  celular: "+55 (21) 97662-8831",
  email: "renatjf@gmail.com",
  cidade: "Rio de Janeiro, RJ — Brasil",
  linkedin: "https://www.linkedin.com/in/seu-perfil/",
  linkedinLabel: "linkedin.com/in/seu-perfil",
};

export const formacao = [
  {
    curso: "Bacharelado em Ciência da Computação",
    instituicao: "Universidade Federal de São Paulo",
    periodo: "2015 – 2019",
    descricao:
      "Formação sólida em algoritmos, estruturas de dados, engenharia de software e sistemas distribuídos.",
  },
  {
    curso: "Pós-Graduação em Arquitetura de Software",
    instituicao: "PUC Minas — EAD",
    periodo: "2020 – 2021",
    descricao: "Especialização em padrões de projeto, microsserviços e DevOps.",
  },
];

export const especializacoes = [
  {
    nome: "AWS Cloud Practitioner",
    instituicao: "Amazon Web Services",
    ano: "2023",
  },
  { nome: "Google Cloud Associate", instituicao: "Google Cloud", ano: "2022" },
  { nome: "React — The Complete Guide", instituicao: "Udemy", ano: "2022" },
  { nome: "Node.js Avançado", instituicao: "Alura", ano: "2021" },
  { nome: "Docker & Kubernetes", instituicao: "Linux Foundation", ano: "2021" },
  { nome: "Clean Architecture", instituicao: "Udemy", ano: "2020" },
  { nome: "Scrum Master Certified", instituicao: "ScrumAlliance", ano: "2020" },
  { nome: "TypeScript Completo", instituicao: "Rocketseat", ano: "2019" },
];

export const portfolio = [
  {
    titulo: "Plataforma de Assinaturas SaaS",
    papel: "Desenvolvimento full stack",
    descricao:
      "Aplicação de gestão de assinaturas com painel administrativo, cobrança recorrente e integrações com Stripe e AWS. Foco em performance, segurança e experiência do usuário.",
    tags: ["React", "Node.js", "Stripe", "AWS"],
    url: "https://github.com/seu-usuario/plataforma-saas",
    urlLabel: "Ver no GitHub",
  },
  {
    titulo: "Dashboard de Indicadores Financeiros",
    papel: "Dashboard Web",
    descricao:
      "Painel interativo com visualizações de dados em tempo real, filtros personalizados e exportação de relatórios. Arquitetura moderna para alta disponibilidade.",
    tags: ["TypeScript", "Next.js", "D3.js", "PostgreSQL"],
    url: "https://github.com/seu-usuario/dashboard-financeiro",
    urlLabel: "Ver no GitHub",
  },
  {
    titulo: "Landing Page Institucional",
    papel: "Front-end e performance",
    descricao:
      "Site responsivo e otimizado para conversão, com animações suaves, SEO técnico e desempenho superior em Lighthouse.",
    tags: ["HTML", "SCSS", "JavaScript", "SEO"],
    url: "https://github.com/seu-usuario/landing-institucional",
    urlLabel: "Ver no GitHub",
  },
];

export const experiencias = [
  {
    empresa: "TechCorp Brasil",
    cargo: "Tech Lead / Sênior Full Stack",
    inicio: "Jan 2022",
    fim: "Presente",
    resumo:
      "Liderança técnica de squad de 8 pessoas responsável pelo produto principal da empresa (B2B SaaS). Atuei na migração de monolito para microsserviços, reduzindo o tempo de deploy em 70% e aumentando a disponibilidade para 99.9%. Implementei cultura de code review, testes automatizados e documentação técnica.",
    tecnologias: [
      { nome: "React", porcentagem: 95 },
      { nome: "Node.js", porcentagem: 90 },
      { nome: "TypeScript", porcentagem: 92 },
      { nome: "AWS", porcentagem: 80 },
      { nome: "Docker/K8s", porcentagem: 75 },
      { nome: "PostgreSQL", porcentagem: 85 },
    ],
  },
  {
    empresa: "Agência Digital XYZ",
    cargo: "Desenvolvedor Full Stack Pleno",
    inicio: "Mar 2020",
    fim: "Dez 2021",
    resumo:
      "Desenvolvimento de projetos para clientes de médio e grande porte nas áreas de e-commerce, fintech e healthcare. Liderança técnica de projetos desde o levantamento de requisitos até o deploy em produção. Implementação de pipelines CI/CD com GitHub Actions.",
    tecnologias: [
      { nome: "Vue.js", porcentagem: 88 },
      { nome: "Node.js", porcentagem: 85 },
      { nome: "Python", porcentagem: 70 },
      { nome: "MySQL", porcentagem: 80 },
      { nome: "Redis", porcentagem: 65 },
    ],
  },
  {
    empresa: "StartupHub",
    cargo: "Desenvolvedor Front-End Junior",
    inicio: "Jun 2019",
    fim: "Fev 2020",
    resumo:
      "Desenvolvimento de interfaces modernas e responsivas para plataforma de gestão de projetos. Integração com APIs REST, implementação de design system e otimização de performance (Lighthouse score de 60 para 95).",
    tecnologias: [
      { nome: "React", porcentagem: 75 },
      { nome: "CSS/SCSS", porcentagem: 85 },
      { nome: "JavaScript", porcentagem: 80 },
      { nome: "Git", porcentagem: 70 },
    ],
  },
];
