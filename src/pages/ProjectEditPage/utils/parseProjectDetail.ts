import { Project } from "api-models"

const appendString = (arr: string[]) => {
  while (arr.length < 6) {
    arr.push("")
  }
  return arr
}
//받아온 프로젝트 정보를 작성 타입에 맞춰 변환
export const parseProjectDetail = (data: Project) => {
  return {
    name: data.name,
    subName: data.subName,
    overview: data.overview,
    thumbnailUrl: data.thumbnailUrl,
    overviewImageUrl: appendString(data.overviewImageUrl.map(({ url }) => url)), //string[]
    githubUrl: data.githubUrl,
    deployUrl: data.deployUrl,
    techStacks: data.techStacks,
    startDate: data.startDate,
    endDate: data.endDate,
    members: data.members,
    description: data.description,
    troubleShooting: data.troubleShooting,
  }
}
