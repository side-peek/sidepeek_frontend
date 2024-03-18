import { TechStack } from "api-models"

const techStacksCategory = (techStacks: TechStack[]) => {
  const groupedByCateegoryTechStacks = Object.entries(
    techStacks.reduce<Record<string, TechStack[]>>((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    }, {}),
  )

  const duplicateFilteredTechStacks = groupedByCateegoryTechStacks.map(
    (item) => {
      return [
        item[0],
        item[1].filter((item2, index, callback) => {
          return (
            index === callback.findIndex((t) => t.skill.id === item2.skill.id)
          )
        }),
      ]
    },
  )

  // 타입오류 왜 나는지 모름..
  return duplicateFilteredTechStacks as [string, TechStack[]][]
}

export default techStacksCategory
