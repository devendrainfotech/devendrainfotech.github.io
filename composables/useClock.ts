export function useClock() {
  const time = ref('—')

  function tick() {
    time.value =
      new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      } as Intl.DateTimeFormatOptions).format(new Date()) + ' IST'
  }

  onMounted(() => {
    tick()
    const id = setInterval(tick, 1000)
    onUnmounted(() => clearInterval(id))
  })

  return { time }
}
