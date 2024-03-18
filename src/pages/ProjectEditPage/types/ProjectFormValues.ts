import { Skill } from "api-models"

export type ProjectFormValues = {
  name: string
  subName: string
  overview: string
  overviewImageUrl: string[]
  thumbnailUrl: string
  githubUrl: string
  deployUrl: string
  startDate: string //2002-02
  endDate: string //동일
  techStacks: { category: string; stacks: Skill[] }[]
  description: ""
  troubleShooting: ""
}
