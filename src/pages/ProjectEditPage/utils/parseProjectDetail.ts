import { Project } from "api-models"

import { categorizeMembers } from "@utils/categorizeMembers"
import { categorizeTechStacks } from "@utils/categorizeTechStacks"

//받아온 프로젝트 정보를 작성 타입에 맞춰 변환
export const parseProjectDetail = (data: Project) => {
  return {
    name: data.name,
    subName: data.subName,
    overview: data.overview,
    thumbnailUrl: data.thumbnailUrl,
    overviewImageUrl: data.overviewImageUrl.map(({ url }) => url), //string[]
    githubUrl: data.githubUrl,
    deployUrl: data.deployUrl,
    techStacks: categorizeTechStacks(data.techStacks),
    startDate: data.startDate,
    endDate: data.endDate,
    members: categorizeMembers(data.members),
    description: data.description,
    troubleShooting: data.troubleShooting,
  }
}
