import { Project } from "api-models"

import { processMembers } from "@utils/process/processMembers"
import { processTechStacks } from "@utils/process/processTechStacks"

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
    techStacks: processTechStacks(data.techStacks),
    startDate: data.startDate,
    endDate: data.endDate,
    members: processMembers(data.members),
    description: data.description,
    troubleShooting: data.troubleShooting,
  }
}
