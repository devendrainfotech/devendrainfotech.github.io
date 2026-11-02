export const profile = {
  name: 'Devendra Yadav',
  title: 'Senior Full-stack Engineer',
  location: 'Ahmedabad, IN',
  email: 'devendrainfotech@gmail.com',
  availability: 'Open to opportunities',
  // Short professional summary — assembled from the site's Hero + About copy.
  summary: [
    'Senior full-stack engineer with 9+ years shipping production systems in TypeScript across healthcare, fintech, cybersecurity, trading, and logistics — now building AI product infrastructure, including a multi-cloud healthcare copilot.',
    'I build and own every layer — from Terraform IaC across AWS, Azure, and GCP to pixel-tuned UIs: Nuxt/Vue and React frontends, Node/NestJS services, and real-time data pipelines.',
  ],
  links: [
    { label: 'GitHub', handle: '@devendrainfotech', url: 'https://github.com/devendrainfotech' },
    { label: 'LinkedIn', handle: '/in/devendrainfotech', url: 'https://www.linkedin.com/in/devendrainfotech/' },
    { label: 'Medium', handle: '@devendrainfotech', url: 'https://medium.com/@devendrainfotech' },
    { label: 'Website', handle: 'devendrainfotech.github.io', url: 'https://devendrainfotech.github.io' },
  ],
} as const

export const skills = [
  { num: '/ 01', name: 'JavaScript & TypeScript', tools: 'ES2024 · TS strict · Zod · type-level patterns · template literal types', level: 5, label: 'Expert' },
  { num: '/ 02', name: 'Node.js & Backend', tools: 'Express · NestJS · Serverless · microservices · AWS Lambda · job queues', level: 5, label: 'Expert' },
  { num: '/ 03', name: 'Vue / Nuxt & React', tools: 'Nuxt 4 · Vue 3 · Pinia · React · Next.js · Angular · Redux · RxJS', level: 4, label: 'Advanced' },
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
    desc: 'Lead Nuxt 4 engineer for three CooperSurgical fertility brands — California Cryobank (sperm bank), Donor Egg Bank, and NW Cryobank — across 11 US donation locations. Built on AWS Elastic Beanstalk; sites score 90+ Lighthouse performance and load noticeably faster than the legacy builds.',
    year: '2024',
    href: 'https://spermbank.com',
    preview: 'COOPERSURGICAL',
  },
  {
    num: '/ 02',
    title: 'Panopto Stream — CDC Pipeline',
    desc: 'Near-real-time CDC pipeline for Panopto\'s enterprise video platform (1,500+ universities). MSSQL → Debezium → Amazon MSK → AWS Lambda → Postgres mirrors dozens of tables with seconds-to-minute end-to-end lag.',
    year: '2024',
    href: 'https://www.panopto.com',
    preview: 'PANOPTO STREAM',
  },
  {
    num: '/ 03',
    title: 'MyOneLine Health — Cloud Infra',
    desc: 'Sole infrastructure owner for an AI physician copilot — 15+ Terraform modules provisioning AKS/GKE, managed databases, secrets, and networking/storage/CDN across Azure and GCP, with dev/staging/prod parity. Multi-cloud for client vendor-neutrality.',
    year: '2024',
    href: 'https://www.myonelinehealth.com',
    preview: 'MYONELINE',
  },
  {
    num: '/ 04',
    title: 'Ragnar — Full Platform Build',
    desc: 'Architected the complete platform for America\'s largest relay race network (750k+ runners) — 8 Angular sites, registration hub, CMS, ML face-recognition photos, and serverless microservices that absorbed tens of thousands of req/s at race-day peaks. Migrated hundreds of thousands of records off legacy PHP.',
    year: '2021',
    href: 'https://runragnar.com',
    preview: 'RAGNAR',
  },
  {
    num: '/ 05',
    title: 'SIRP — Security Orchestration',
    desc: 'Architected the Playbook Editor for SIRP\'s AI-native SOC platform — a graph-based, no-code workflow builder at the core of the product (SIRP reports 80% lower MTTD and 70% faster MTTR).',
    year: '2022',
    href: 'https://www.sirp.io',
    preview: 'SIRP',
  },
  {
    num: '/ 06',
    title: 'Doxo — Billing Automation',
    desc: 'Solo-built a billing automation system sustaining 130 req/s — integrating Chargify, Salesforce, Chargeback, and Iterable to eliminate nearly all manual billing and chargeback ops across Doxo\'s 120,000+ biller network.',
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
    when: 'Jan 2023 — Jun 2024',
    role: 'Full-stack Engineer',
    company: 'Benchmark Estimating · Remote',
    desc: 'Full-stack development on a cloud-based cost and carbon estimating SaaS for infrastructure projects across Australia, UK, and New Zealand. Polyglot codebase: Node.js, C#, Python, React, MSSQL.',
    current: false,
  },
  {
    when: 'Oct 2021 — Dec 2022',
    role: 'Team Lead',
    company: 'Kavobits · Ahmedabad',
    desc: 'Led engineering across medical, trading, and SaaS automation projects. Integrated ChartIQ for OptionsPlay, built Doxo\'s 130 req/s automation layer solo, and drove CI/CD adoption across the team.',
    current: false,
  },
  {
    when: 'Jan 2019 — Sep 2021',
    role: 'Sr. Software Engineer',
    company: 'ToxCore Solutions · Ahmedabad',
    desc: 'Owned the entire Ragnar ecosystem — 10+ projects for America\'s largest relay race network. Led a 5-person team, introduced NestJS to replace legacy PHP, and built everything from Angular frontends to serverless microservices.',
    current: false,
  },
  {
    when: 'Jan 2017 — Dec 2018',
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
    href: 'https://medium.com/@devendrainfotech/getting-started-with-node-js-and-chatgpt-unleashing-the-power-of-ai-in-your-next-project-15dffd1425fb',
  },
  {
    date: 'Feb 2023',
    readTime: '6 min',
    title: 'Unleashing the Power of EDI with Node.js',
    excerpt: 'A practical guide to Electronic Data Interchange with Node.js — streamlining B2B data exchange and automating business processes with standardised EDI formats.',
    href: 'https://medium.com/@devendrainfotech/unleashing-the-power-of-edi-with-node-js-streamlining-business-processes-with-ease-964ce89c73a3',
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
  { year: '2026', title: 'AWS Certified AI Practitioner — in progress', org: 'Amazon Web Services', tag: 'Certification' },
  { year: '2026', title: 'Generative AI with LLMs', org: 'DeepLearning.AI × AWS', tag: 'Certification' },
  { year: '2026', title: 'DeepLearning.AI — GenAI / LLM coursework', org: 'DeepLearning.AI', tag: 'Coursework' },
  { year: '2025', title: 'AWS Certified Developer – Associate', org: 'Amazon Web Services', tag: 'Certification' },
  { year: '2021', title: 'Excellence Team Player', org: 'ToxCore Solutions', tag: 'Award' },
  { year: '2021', title: '3+ Years Long-Service Recognition', org: 'ToxCore Solutions', tag: 'Award' },
  { year: '2015', title: '2nd Place — State-level Code-o-Crack', org: 'R.B. Technical Institute', tag: 'Competition' },
  { year: '2015', title: '1st Rank — College Semesters', org: 'Govt. MCA College, Ahmedabad', tag: 'Academic' },
] as const
