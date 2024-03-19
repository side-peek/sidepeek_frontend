interface WithIdType {
  id: number | null
}

export const filterSelectedId = <T extends WithIdType>(
  data: T[],
  selected: T[],
) => {
  return data.filter((stack) => {
    return !selected.some((selectedStack) => selectedStack.id === stack.id)
  })
}
