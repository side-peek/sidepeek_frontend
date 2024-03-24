import { Skill, UserSummary } from "api-models"

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
  techStacks: { category: string; skill: Skill[] }[]
  description: string
  troubleShooting: string
  members: { role: string; userSummary: UserSummary[] }[]
}
