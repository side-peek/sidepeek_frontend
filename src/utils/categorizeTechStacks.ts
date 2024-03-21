import { TechStack } from "api-models"

export interface CategoryTechStacks {
  category: string
  techStacks: TechStack[]
}

export const categorizeTechStacks = (
  techsStacks: TechStack[],
): CategoryTechStacks[] => {
  const categorizedTechStacks = Object.values(
    techsStacks.reduce<Record<string, CategoryTechStacks>>((acc, item) => {
      const categoryName = item.category

      if (!acc[categoryName]) {
        acc[categoryName] = { category: categoryName, techStacks: [] }
      }

      acc[categoryName].techStacks.push({
        id: item.id,
        category: categoryName,
        skill: item.skill,
      })

      return acc
    }, {}),
  )

  return categorizedTechStacks
}
