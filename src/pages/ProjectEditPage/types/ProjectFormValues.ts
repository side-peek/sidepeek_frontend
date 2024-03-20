import { Skill } from "api-models"

export type RequestedMemberType = {
  id: number | null
  nickname: string
  profileImageUrl: string | null
}

export type ProjectFormValues = {
  name: string
  subName: string
  overview: string
  overviewImageUrl: string[]
  thumbnailUrl: string
  githubUrl: string
  deployUrl: string
  startDate: string
  endDate: string
  techStacks: { category: string; data: Skill[] }[]
  description: string
  troubleShooting: string
  members: { category: string; data: RequestedMemberType[] }[]
}
