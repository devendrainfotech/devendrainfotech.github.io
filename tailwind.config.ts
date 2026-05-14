import type { Config } from 'tailwindcss'

export default {
  content: [],
  corePlugins: {
    // Disable Tailwind's base reset — the project uses its own CSS variables and base styles
    preflight: false,
  },
} satisfies Config
