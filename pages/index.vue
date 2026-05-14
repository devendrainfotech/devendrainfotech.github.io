<template>
  <div>
    <!-- Interactive background dot grid (client-only, no SSR flash) -->
    <DotGrid />

    <AppHeader />

    <main id="top">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ExperienceSection />
      <WritingSection />
      <TestimonialsSection />
      <AwardsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// ── SEO ──────────────────────────────────────────────────────────────────────
useSeoMeta({
  title: 'Devendra Yadav — Full-stack JavaScript Developer',
  description:
    'Full-stack engineer based in Bengaluru. 6+ years shipping TypeScript, Node.js, React, and PostgreSQL across startups and consulting. Available for new roles in Q3 2026.',
  ogTitle: 'Devendra Yadav — Full-stack JavaScript Developer',
  ogDescription:
    'Full-stack engineer based in Bengaluru. TypeScript · Node · React · Postgres. Available Q3 2026.',
  ogType: 'website',
  ogUrl: 'https://devendrainfotech.github.io',
  ogImage: 'https://devendrainfotech.github.io/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Devendra Yadav — Full-stack JavaScript Developer',
  twitterDescription: 'Full-stack engineer. TypeScript · Node · React · Postgres. Available Q3 2026.',
  twitterImage: 'https://devendrainfotech.github.io/og-image.png',
})

useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'canonical', href: 'https://devendrainfotech.github.io' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
  ],
  // JSON-LD Person schema
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Devendra Yadav',
        url: 'https://devendrainfotech.github.io',
        email: 'hey@devendra.dev',
        jobTitle: 'Full-stack JavaScript Developer',
        description:
          'Full-stack engineer with 6+ years experience shipping TypeScript, Node.js, React, and PostgreSQL.',
        address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' },
        sameAs: [
          'https://github.com/devendray',
          'https://linkedin.com/in/devendray',
        ],
        knowsAbout: ['TypeScript', 'JavaScript', 'Node.js', 'React', 'Next.js', 'PostgreSQL', 'GraphQL'],
      }),
    },
  ],
})
</script>
