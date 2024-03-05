import { TechStack } from "api-models"

const techStacksCategory = (techStacks: TechStack[]) => {
  return Object.entries(
    techStacks.reduce<Record<string, TechStack[]>>((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    }, {}),
  )
}

export default techStacksCategory
