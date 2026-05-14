export const skills = [
  { num: '/ 01', name: 'TypeScript', tools: 'tsc · tsconfig · zod · type-level programming · template literal types', level: 5, label: 'Expert' },
  { num: '/ 02', name: 'React & Next.js', tools: 'App Router · RSC · Suspense · tRPC · React Query · Zustand', level: 5, label: 'Expert' },
  { num: '/ 03', name: 'Node.js', tools: 'Express · Fastify · Hono · streams · workers · job queues (BullMQ)', level: 5, label: 'Expert' },
  { num: '/ 04', name: 'PostgreSQL', tools: 'schema design · CTEs · RLS · Drizzle · Prisma · pg_stat hunting', level: 4, label: 'Advanced' },
  { num: '/ 05', name: 'GraphQL', tools: 'Apollo · GraphQL Yoga · federation · DataLoader · persisted queries', level: 4, label: 'Advanced' },
  { num: '/ 06', name: 'Cloud & DX', tools: 'AWS · Vercel · Cloudflare · Docker · GitHub Actions · Terraform', level: 4, label: 'Advanced' },
  { num: '/ 07', name: 'Testing', tools: 'Vitest · Playwright · MSW · property-based (fast-check) · RTL', level: 4, label: 'Advanced' },
  { num: '/ 08', name: 'Design systems', tools: 'Radix · Tailwind · shadcn/ui · token pipelines · Figma variables', level: 3, label: 'Intermediate' },
] as const

export const projects = [
  {
    num: '/ 01',
    title: 'Ledger — double-entry accounting API',
    desc: 'A type-safe bookkeeping engine with audit trails, idempotent postings, and a tiny query language. Serves 40k+ txns/day.',
    year: '2025',
    href: '#',
    preview: 'LEDGER API',
  },
  {
    num: '/ 02',
    title: 'Fieldnote — team wiki that writes itself',
    desc: 'Pulls commits, issues, and docs into a live knowledge graph. Built with Next.js, tRPC, and Postgres FTS.',
    year: '2025',
    href: '#',
    preview: 'FIELDNOTE',
  },
  {
    num: '/ 03',
    title: 'Halcyon — realtime collab whiteboard',
    desc: 'CRDT-backed canvas with presence, shape primitives, and a plugin API. Yjs + Liveblocks + Canvas2D.',
    year: '2024',
    href: '#',
    preview: 'HALCYON',
  },
  {
    num: '/ 04',
    title: 'Tessera — component library & docs',
    desc: 'A React primitives library with 48 components, theming, and MDX-powered documentation. 2.1k stars.',
    year: '2024',
    href: '#',
    preview: 'TESSERA',
  },
  {
    num: '/ 05',
    title: 'Pipeline — CI status for your menu bar',
    desc: 'A tiny Electron app that surfaces build/deploy status across 5 providers. Electron + TS + SQLite.',
    year: '2023',
    href: '#',
    preview: 'PIPELINE',
  },
  {
    num: '/ 06',
    title: 'Bloom — SaaS onboarding kit',
    desc: 'Drop-in auth, billing, and admin for B2B SaaS. Next.js, Stripe, Postgres, RLS. Powers 12 shipped products.',
    year: '2023',
    href: '#',
    preview: 'BLOOM',
  },
] as const

export const experience = [
  {
    when: '2024 — Now',
    role: 'Senior Full-stack Engineer',
    company: 'Nimbus Labs · Bengaluru',
    desc: 'Leading product engineering on a developer tooling SaaS. Owning the platform team: infra, APIs, UI, and the design system used across 3 products.',
    current: true,
  },
  {
    when: '2022 — 2024',
    role: 'Full-stack Engineer',
    company: 'Stacks — YC W22',
    desc: 'Early hire. Built the onboarding, billing, and admin surfaces from scratch. Took the product from closed beta to 20k MAU.',
    current: false,
  },
  {
    when: '2020 — 2022',
    role: 'Software Engineer',
    company: 'Consulting · Remote',
    desc: 'Shipped web apps for fintech, healthtech, and media clients. React, Node, Postgres. Occasional React Native detours.',
    current: false,
  },
  {
    when: '2019 — 2020',
    role: 'Junior Developer',
    company: 'Thinkbridge · Pune',
    desc: 'First job. Learned production. Built internal tools for a logistics client; rewrote a 40k-line jQuery app in React.',
    current: false,
  },
] as const

export const writing = [
  {
    date: 'Mar 2026',
    readTime: '8 min',
    title: 'Types as the product spec',
    excerpt: 'Why I start every new feature in the type checker, not the editor — and how it shortens the loop from idea to shipping.',
    href: '#',
  },
  {
    date: 'Jan 2026',
    readTime: '12 min',
    title: 'Double-entry is a pattern, not an accounting thing',
    excerpt: 'A tour of ledger-style data modelling for non-finance apps: ticketing, inventory, credits, and state machines.',
    href: '#',
  },
  {
    date: 'Nov 2025',
    readTime: '5 min',
    title: 'The tiny language of good CLIs',
    excerpt: 'Designing command-line tools that feel conversational — notes from shipping three dev tools in a year.',
    href: '#',
  },
  {
    date: 'Sep 2025',
    readTime: '9 min',
    title: 'Migrating 400k lines to TypeScript without a rewrite',
    excerpt: 'A pragmatic, PR-sized playbook that actually worked in production. Tools, heuristics, and the traps we hit.',
    href: '#',
  },
] as const

export const testimonials = [
  {
    quote: 'Devendra is the rare engineer who\'s <em>equally dangerous</em> in a database and a design review. He raised the bar for the whole team.',
    name: 'Priya Ramachandran',
    role: 'VP Engineering · Stacks',
    initials: 'PR',
  },
  {
    quote: 'Shipped an entire billing system in a fortnight — and it still runs, two years in, without a single paging incident.',
    name: 'Marcus Keller',
    role: 'CTO · Halcyon',
    initials: 'MK',
  },
  {
    quote: 'A product engineer who <em>actually ships</em>. Dev writes JavaScript the way good novelists write sentences — carefully.',
    name: 'Ana Novák',
    role: 'Design Lead · Nimbus',
    initials: 'AN',
  },
] as const

export const awards = [
  { year: '2025', title: 'GitHub Stars — Developer Program', org: 'GitHub', tag: 'Award' },
  { year: '2025', title: 'Speaker — "Ledgers in JS" at JSConf.in', org: 'JSConf India', tag: 'Talk' },
  { year: '2024', title: 'Product Hunt — #2 Product of the Day', org: 'Tessera launch', tag: 'Launch' },
  { year: '2024', title: 'Open-Source Grant', org: 'Vercel OSS Program', tag: 'Grant' },
  { year: '2023', title: 'Guest Lecture — "Modern full-stack TS"', org: 'BITS Pilani', tag: 'Talk' },
] as const
