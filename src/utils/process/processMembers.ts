import { Member, UserSummary } from "api-models"

export type ProcessedMember = {
  role: string
  members: UserSummary[]
}

export const processMembers = (data: Member[]) => {
  const result: ProcessedMember[] = []

  data.forEach((item) => {
    const existingRole = result.find((roleItem) => roleItem.role === item.role)
    //배열에서 역할 필드와 동일한 원소를 찾음
    if (existingRole) {
      existingRole.members.push(item.userSummary)
    } else {
      result.push({
        role: item.role,
        members: [item.userSummary],
      })
    }
  })

  return result
}
