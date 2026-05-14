const STORAGE_KEY = 'dy-theme'

export function useTheme() {
  // useState → SSR-safe shared state across the component tree
  const theme = useState<'dark' | 'light'>('theme', () => 'dark')

  function applyTheme(value: 'dark' | 'light') {
    theme.value = value
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem(STORAGE_KEY, value)
    }
  }

  function toggle() {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  // Hydrate from localStorage once client is ready
  if (import.meta.client) {
    onMounted(() => {
      const saved = localStorage.getItem(STORAGE_KEY) as 'dark' | 'light' | null
      if (saved && saved !== theme.value) {
        applyTheme(saved)
      }
    })
  }

  return { theme, toggle }
}
