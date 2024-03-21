import { Member } from "api-models"

export interface CategoryMembers {
  role: string
  members: Member[]
}

export const categorizeMembers = (members: Member[]): CategoryMembers[] => {
  const categorizedMembers = Object.values(
    members.reduce<Record<string, CategoryMembers>>((acc, item) => {
      const categoryName = item.role

      if (!acc[categoryName]) {
        acc[categoryName] = {
          role: categoryName,
          members: [],
        }
      }

      acc[categoryName].members.push({
        id: item.id,
        role: categoryName,
        userSummary: item.userSummary,
      })
      return acc
    }, {}),
  )

  return categorizedMembers
}
