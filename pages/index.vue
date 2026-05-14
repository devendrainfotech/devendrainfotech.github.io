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
  title: 'Devendra Yadav — Senior Full-stack Engineer',
  description:
    'Senior full-stack engineer based in Ahmedabad. 9+ years shipping TypeScript, Nuxt, Node/NestJS, and Terraform across healthcare, fintech, cybersecurity, and logistics.',
  ogTitle: 'Devendra Yadav — Senior Full-stack Engineer',
  ogDescription:
    'Senior full-stack engineer based in Ahmedabad. Nuxt · NestJS · Terraform across AWS, Azure, and GCP. Currently shipping for CooperSurgical and Panopto.',
  ogType: 'website',
  ogUrl: 'https://devendrainfotech.github.io',
  ogImage: 'https://devendrainfotech.github.io/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Devendra Yadav — Senior Full-stack Engineer',
  twitterDescription: 'Senior full-stack engineer. Nuxt · NestJS · Terraform across AWS, Azure, and GCP.',
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
        email: 'devendrainfotech@gmail.com',
        jobTitle: 'Senior Full-stack Engineer',
        description:
          'Senior full-stack engineer with 9+ years experience shipping TypeScript, Nuxt, Node/NestJS, and Terraform across healthcare, fintech, cybersecurity, and logistics.',
        address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressCountry: 'IN' },
        sameAs: [
          'https://github.com/devendrainfotech',
          'https://www.linkedin.com/in/devendrainfotech/',
          'https://medium.com/@devendrainfotech',
          'https://www.credly.com/badges/e2be3cb2-3e09-44b2-9cd6-411311bdc22e/public_url',
        ],
        knowsAbout: [
          'TypeScript', 'JavaScript', 'Node.js', 'NestJS', 'Vue.js', 'Nuxt', 'React', 'Next.js', 'Angular',
          'PostgreSQL', 'MySQL', 'MSSQL', 'MongoDB', 'DynamoDB', 'Redis',
          'AWS', 'Azure', 'GCP', 'Terraform', 'Elastic Beanstalk', 'AWS Lambda', 'Serverless',
          'Debezium', 'Amazon MSK', 'Kafka', 'CDC',
          'GraphQL', 'REST APIs', 'Docker', 'CI/CD',
        ],
      }),
    },
  ],
})
</script>
