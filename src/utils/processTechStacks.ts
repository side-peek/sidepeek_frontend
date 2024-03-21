import { Skill, TechStack } from "api-models"

import { FieldElement } from "@components/TechStack/hooks/useTechStack"

export const processTechStacks = (techStacks: TechStack[]) => {
  const processed = {} as { [key: string]: FieldElement<Skill> }

  techStacks.forEach((stack) => {
    const { category, skill } = stack

    if (!processed[category]) {
      processed[category] = { category, data: [] }
    }

    processed[category].data.push({
      id: skill.id,
      name: skill.name,
      iconImageUrl: skill.iconImageUrl,
    })
  })

  return Object.values(processed)
}
