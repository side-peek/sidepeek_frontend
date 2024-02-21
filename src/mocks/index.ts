export const initMsw = async () => {
  const { worker } = await import('./browser')
  worker.start()
}
