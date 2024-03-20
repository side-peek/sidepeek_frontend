import { Skill } from "api-models"

import { FieldElement } from "@components/TechStack/hooks/useTechStack"

export const revertTechStacks = (
  processedTechStacks: FieldElement<Skill>[],
) => {
  const originalFormatTechStacks = [] as {
    skillId: number
    category: string
  }[]

  processedTechStacks.forEach((processedStack) => {
    const { category, data } = processedStack

    data.forEach((skill) => {
      originalFormatTechStacks.push({
        skillId: skill.id,
        category: category,
      })
    })
  })

  return originalFormatTechStacks
}
