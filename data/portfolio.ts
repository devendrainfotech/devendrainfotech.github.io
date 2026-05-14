export const skills = [
  { num: '/ 01', name: 'JavaScript & TypeScript', tools: 'ES2024 · TS strict · Zod · type-level patterns · template literal types', level: 5, label: 'Expert' },
  { num: '/ 02', name: 'Node.js & Backend', tools: 'Express · NestJS · Serverless · microservices · AWS Lambda · job queues', level: 5, label: 'Expert' },
  { num: '/ 03', name: 'Vue / Nuxt & React', tools: 'Nuxt 4 · Vue 3 · Pinia · React · Next.js · Angular · Redux · RxJS', level: 5, label: 'Expert' },
  { num: '/ 04', name: 'Databases', tools: 'Postgres · MySQL · MSSQL · MongoDB · DynamoDB · Redis · Elastic Search', level: 5, label: 'Expert' },
  { num: '/ 05', name: 'Cloud & Infrastructure', tools: 'AWS · Azure · GCP · Terraform · Elastic Beanstalk · Docker · CI/CD', level: 5, label: 'Expert' },
  { num: '/ 06', name: 'Data Pipelines', tools: 'Debezium · Amazon MSK · Kafka · CDC · Lambda consumers · MSSQL → Postgres', level: 4, label: 'Advanced' },
  { num: '/ 07', name: 'GraphQL & APIs', tools: 'GraphQL · Apollo · REST · Swagger · federation · DataLoader · Socket.io', level: 4, label: 'Advanced' },
  { num: '/ 08', name: 'Mobile', tools: 'Ionic · Cordova · Flutter · Dart · hybrid apps', level: 3, label: 'Intermediate' },
] as const

export const projects = [
  {
    num: '/ 01',
    title: 'CooperSurgical Fertility Brands',
    desc: 'Lead Nuxt 4 engineer for three CooperSurgical fertility brands — California Cryobank (sperm bank), Donor Egg Bank, and NW Cryobank — running on AWS Elastic Beanstalk across 11 US donation locations.',
    year: '2024',
    href: 'https://spermbank.com',
    preview: 'COOPERSURGICAL',
  },
  {
    num: '/ 02',
    title: 'Panopto Stream — CDC Pipeline',
    desc: 'Real-time data pipeline for Panopto\'s enterprise video platform (1,500+ universities). MSSQL → Debezium → Amazon MSK → AWS Lambda → Postgres enabling live data sync at scale.',
    year: '2024',
    href: 'https://www.panopto.com',
    preview: 'PANOPTO STREAM',
  },
  {
    num: '/ 03',
    title: 'MyOneLine Health — Cloud Infra',
    desc: 'Designed Terraform-managed infrastructure across Azure and GCP for an AI physician copilot platform — full IaC from networking to managed services across 3 environments.',
    year: '2024',
    href: 'https://www.myonelinehealth.com',
    preview: 'MYONELINE',
  },
  {
    num: '/ 04',
    title: 'Ragnar — Full Platform Build',
    desc: 'Architected and built the complete platform for America\'s largest relay race network (750k+ runners) — 8 Angular sites, registration hub, CMS, ML face-recognition photo platform, and serverless microservices.',
    year: '2021',
    href: 'https://runragnar.com',
    preview: 'RAGNAR',
  },
  {
    num: '/ 05',
    title: 'SIRP — Security Orchestration',
    desc: 'Architected the Playbook Editor for SIRP\'s AI-native SOC platform — a graph-based, no-code workflow builder that\'s the core surface security teams use to automate threat response.',
    year: '2022',
    href: 'https://www.sirp.io',
    preview: 'SIRP',
  },
  {
    num: '/ 06',
    title: 'Doxo — Billing Automation',
    desc: 'Solo-built a billing automation system processing 130 req/s — integrating Chargify, Salesforce, and Iterable to eliminate manual ops across Doxo\'s 120,000+ biller network.',
    year: '2022',
    href: 'https://www.doxo.com',
    preview: 'DOXO',
  },
] as const

export const experience = [
  {
    when: 'Jul 2024 — Now',
    role: 'Senior Full-stack Engineer',
    company: 'Basis Worldwide · Ahmedabad',
    desc: 'Leading Nuxt 4 development for CooperSurgical\'s fertility brand portfolio, architecting Terraform infrastructure across Azure and GCP, and building real-time CDC data pipelines. Clients include Fortune 500 companies.',
    current: true,
  },
  {
    when: '2022 — Jun 2024',
    role: 'Full-stack Engineer',
    company: 'Benchmark Estimating · Remote',
    desc: 'Full-stack development on a cloud-based cost and carbon estimating SaaS for infrastructure projects across Australia, UK, and New Zealand. Polyglot codebase: Node.js, C#, Python, React, MSSQL.',
    current: false,
  },
  {
    when: 'Oct 2021 — 2022',
    role: 'Team Lead',
    company: 'Kavobits · Ahmedabad',
    desc: 'Led engineering across medical, trading, and SaaS automation projects. Integrated ChartIQ for OptionsPlay, built Doxo\'s 130 req/s automation layer solo, and drove CI/CD adoption across the team.',
    current: false,
  },
  {
    when: 'Jan 2018 — Sep 2021',
    role: 'Sr. Software Engineer',
    company: 'ToxCore Solutions · Ahmedabad',
    desc: 'Owned the entire Ragnar ecosystem — 10+ projects for America\'s largest relay race network. Led a 5-person team, introduced NestJS to replace legacy PHP, and built everything from Angular frontends to serverless microservices.',
    current: false,
  },
  {
    when: 'Apr 2016 — Dec 2018',
    role: 'Jr. Software Engineer',
    company: 'Logilite Technologies · Ahmedabad',
    desc: 'First engineering role. Built a hybrid mobile Driver App (Ionic/Cordova) with real-time GPS tracking and a Node.js stream-processing dashboard visualising live delivery routes with D3.js.',
    current: false,
  },
] as const

export const writing = [
  {
    date: 'Feb 2023',
    readTime: '5 min',
    title: 'Getting Started with Node.js and ChatGPT',
    excerpt: 'How to integrate OpenAI\'s ChatGPT API into a Node.js project — practical setup, prompt engineering basics, and real use cases for AI-powered backends.',
    href: 'https://medium.com/@devendrainfotech',
  },
  {
    date: 'Feb 2023',
    readTime: '6 min',
    title: 'Unleashing the Power of EDI with Node.js',
    excerpt: 'A practical guide to Electronic Data Interchange with Node.js — streamlining B2B data exchange and automating business processes with standardised EDI formats.',
    href: 'https://medium.com/@devendrainfotech',
  },
] as const

export const testimonials = [
  {
    quote: 'Devendra was always working hard to find solutions and speak up during meetings to be both a <em>thought leader and a technical expert</em>. He continued to over-deliver in everything he touched. Devendra is an incredible asset to any team.',
    name: 'Ross McIlwaine',
    role: 'AI Product Lead · onX | ex-Ragnar',
    initials: 'RM',
  },
  {
    quote: 'I worked with Devendra for 2 years and <em>launched over 20 products</em> with his help. He understands how to build for scalability and it helped make our business successful. I would HIGHLY recommend Devendra!',
    name: 'Jeremy Banks',
    role: 'Director of Product · Product Hive',
    initials: 'JB',
  },
  {
    quote: 'Devendra always led by example. His dedication to his craft is <em>nothing short of inspiring</em>, and his ability to coach others is something that I\'ll miss. I\'m grateful to have worked with Devendra.',
    name: 'Deep Govani',
    role: 'Turning Ideas into Interactive Experiences · Angular · Vue · AWS',
    initials: 'DG',
  },
] as const

export const awards = [
  { year: '2025', title: 'AWS Certified Developer – Associate', org: 'Amazon Web Services', tag: 'Certification' },
  { year: '2021', title: 'Excellence Team Player', org: 'ToxCore Solutions', tag: 'Award' },
  { year: '2021', title: '3+ Years Long-Service Recognition', org: 'ToxCore Solutions', tag: 'Award' },
  { year: '2015', title: '2nd Place — State-level Code-o-Crack', org: 'R.B. Technical Institute', tag: 'Competition' },
  { year: '2015', title: '1st Rank — College Semesters', org: 'Govt. MCA College, Ahmedabad', tag: 'Academic' },
] as const
