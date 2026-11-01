<template>
  <div class="resume-page">
    <!-- Toolbar — screen only, stripped from the PDF/print output -->
    <div class="resume-bar no-print">
      <NuxtLink to="/" class="rb-back">← Back to site</NuxtLink>
      <div class="rb-actions">
        <a
          class="rb-btn rb-btn--primary"
          href="/resume.pdf"
          download="Devendra-Yadav-Resume.pdf"
        >Download PDF ↓</a>
        <button class="rb-btn" type="button" @click="printPage">Print</button>
      </div>
    </div>

    <!-- The sheet: rendered identically on screen and inside resume.pdf -->
    <article class="sheet">
      <header class="r-head">
        <div class="r-id">
          <h1 class="r-name">{{ profile.name }}</h1>
          <p class="r-title">{{ profile.title }}</p>
        </div>
        <ul class="r-contact">
          <li>{{ profile.location }}</li>
          <li><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></li>
          <li v-for="l in profile.links" :key="l.label">
            <a :href="l.url">{{ l.handle }}</a>
          </li>
        </ul>
      </header>

      <section class="r-block">
        <p v-for="(line, i) in profile.summary" :key="i" class="r-summary">{{ line }}</p>
      </section>

      <section class="r-block">
        <h2 class="r-h">Experience</h2>
        <div v-for="job in experience" :key="job.company" class="r-item">
          <div class="r-item-head">
            <h3 class="r-role">{{ job.role }}</h3>
            <span class="r-when">{{ job.when }}</span>
          </div>
          <p class="r-company">{{ job.company }}</p>
          <p class="r-desc">{{ job.desc }}</p>
        </div>
      </section>

      <section class="r-block">
        <h2 class="r-h">Selected Projects</h2>
        <div v-for="p in projects" :key="p.title" class="r-item">
          <div class="r-item-head">
            <h3 class="r-role">{{ p.title }}</h3>
            <span class="r-when">{{ p.year }}</span>
          </div>
          <p class="r-desc">{{ p.desc }}</p>
        </div>
      </section>

      <section class="r-block">
        <h2 class="r-h">Skills</h2>
        <div class="r-skills">
          <div v-for="s in skills" :key="s.name" class="r-skill">
            <span class="r-skill-name">{{ s.name }}</span>
            <span class="r-skill-tools">{{ s.tools }}</span>
          </div>
        </div>
      </section>

      <section class="r-block">
        <h2 class="r-h">Awards &amp; Certifications</h2>
        <div v-for="a in awards" :key="a.title" class="r-row">
          <span class="r-row-year">{{ a.year }}</span>
          <span class="r-row-title">{{ a.title }}</span>
          <span class="r-row-org">{{ a.org }}</span>
        </div>
      </section>

      <section class="r-block">
        <h2 class="r-h">Writing</h2>
        <div v-for="w in writing" :key="w.title" class="r-row">
          <span class="r-row-year">{{ w.date }}</span>
          <span class="r-row-title"><a :href="w.href">{{ w.title }}</a></span>
          <span class="r-row-org">{{ w.readTime }} read</span>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import { profile, skills, projects, experience, awards, writing } from '~/data/portfolio'

// Drives the browser tab title and the default PDF filename when printing.
useHead({ title: `${profile.name} — Résumé` })

function printPage() {
  if (import.meta.client) window.print()
}
</script>

<style>
/* ===== Screen scaffold ===== */
.resume-page {
  min-height: 100vh;
  background: var(--bg);
  color: var(--fg);
  padding: 92px 24px 80px;
}

.resume-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 24px;
  background: color-mix(in oklab, var(--bg) 70%, transparent);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}
.rb-back {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.03em;
  color: var(--fg-dim);
  transition: color 0.2s var(--ease);
}
.rb-back:hover { color: var(--fg); }
.rb-actions { display: flex; gap: 10px; }
.rb-btn {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.04em;
  padding: 9px 16px;
  border: 1px solid var(--line-strong);
  border-radius: 99px;
  color: var(--fg);
  background: transparent;
  cursor: pointer;
  transition:
    border-color 0.2s var(--ease),
    color 0.2s var(--ease),
    background 0.2s var(--ease);
}
.rb-btn:hover { border-color: var(--accent); color: var(--accent); }
.rb-btn--primary {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}
.rb-btn--primary:hover { color: var(--accent-ink); filter: brightness(1.06); }

/* ===== The sheet — fixed paper palette so screen preview == PDF ===== */
.sheet {
  --ink: #16150f;
  --ink-soft: #55534a;
  --ink-mid: #35342b;
  --rule: #e4e1d8;
  --brand: #e2650a;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 54px 60px 60px;
  background: #fdfcf9;
  color: var(--ink);
  border-radius: 6px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04), 0 24px 60px rgba(0, 0, 0, 0.28);
  font-family: var(--font-sans);
  line-height: 1.5;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.r-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  padding-bottom: 18px;
  border-bottom: 2px solid var(--ink);
}
.r-name {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 46px;
  line-height: 1;
  letter-spacing: -0.01em;
}
.r-title {
  margin-top: 7px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand);
}
.r-contact {
  list-style: none;
  text-align: right;
  font-family: var(--font-mono);
  font-size: 11.5px;
  line-height: 1.7;
  color: var(--ink-soft);
  white-space: nowrap;
}
.r-contact a { color: var(--ink-soft); }

.r-block { margin-top: 22px; padding: 0; }
.r-h {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--brand);
  padding-bottom: 8px;
  margin-bottom: 14px;
  border-bottom: 1px solid var(--rule);
  break-after: avoid;
}
.r-summary { font-size: 14px; color: var(--ink-mid); }
.r-summary + .r-summary { margin-top: 8px; }

.r-item { margin-bottom: 15px; break-inside: avoid; }
.r-item:last-child { margin-bottom: 0; }
.r-item-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
}
.r-role { font-size: 15.5px; font-weight: 600; }
.r-when {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--ink-soft);
  white-space: nowrap;
}
.r-company {
  margin: 2px 0 5px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--brand);
}
.r-desc { font-size: 13px; color: var(--ink-mid); }

.r-skills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 11px 32px;
}
.r-skill { break-inside: avoid; }
.r-skill-name { display: block; font-size: 13px; font-weight: 600; }
.r-skill-tools {
  display: block;
  font-family: var(--font-mono);
  font-size: 10.5px;
  line-height: 1.5;
  color: var(--ink-soft);
}

.r-row {
  display: grid;
  grid-template-columns: 52px 1fr auto;
  gap: 14px;
  align-items: baseline;
  padding: 5px 0;
  border-bottom: 1px solid var(--rule);
  break-inside: avoid;
}
.r-row:last-child { border-bottom: none; }
.r-row-year {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-soft);
}
.r-row-title { font-size: 13px; font-weight: 500; }
.r-row-title a { color: var(--ink); }
.r-row-org {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-soft);
  text-align: right;
}

/* ===== Print / PDF — the sheet becomes the page ===== */
@page {
  size: A4;
  margin: 13mm 14mm;
}
@media print {
  .no-print { display: none !important; }
  html, body { background: #fff; }
  .resume-page { min-height: 0; padding: 0; background: #fff; }
  .sheet {
    max-width: none;
    width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    background: #fff;
  }
  .r-block { margin-top: 18px; }
}
</style>
