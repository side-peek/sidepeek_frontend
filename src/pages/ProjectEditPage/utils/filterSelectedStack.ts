import { Skill } from "api-models"

export const filterSelectedStack = (data: Skill[], selected: Skill[]) => {
  return data.filter((stack) => {
    return !selected.some((selectedStack) => selectedStack.id === stack.id)
  })
}
