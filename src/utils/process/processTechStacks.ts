import { Skill, TechStack } from "api-models"

export type ProcessedTechStack = {
  category: string
  data: Skill[]
}

export const processTechStacks = (techStacks: TechStack[]) => {
  const result: ProcessedTechStack[] = []

  techStacks.forEach((item) => {
    const existingRole = result.find(
      (roleItem) => roleItem.category === item.category,
    )

    if (existingRole) {
      existingRole.data.push(item.skill)
    } else {
      result.push({
        category: item.category,
        data: [item.skill],
      })
    }
  })

  return result
}
