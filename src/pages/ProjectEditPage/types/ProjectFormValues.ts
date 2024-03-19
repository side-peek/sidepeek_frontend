import { Skill } from "api-models"

export type FieldMember = {
  id: number | null
  nickname: string
  role: string
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
  techStacks: { category: string; stacks: Skill[] }[]
  description: string
  troubleShooting: string
  members: { category: string; members: FieldMember[] }[]
}
