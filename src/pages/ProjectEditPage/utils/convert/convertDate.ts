export const convertDate = (date: string) => {
  const idx = date.lastIndexOf("-")
  return date.slice(0, idx)
}
