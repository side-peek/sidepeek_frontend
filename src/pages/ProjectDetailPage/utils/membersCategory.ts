import { Member } from "api-models"

const membersCategory = (members: Member[]) => {
  return Object.entries(
    members.reduce<Record<string, Member[]>>((acc, item) => {
      if (!acc[item.role]) {
        acc[item.role] = []
      }
      acc[item.role].push(item)
      return acc
    }, {}),
  )
}

export default membersCategory
