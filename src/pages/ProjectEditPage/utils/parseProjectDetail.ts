import { Project } from "api-models"

import membersCategory from "@pages/ProjectDetailPage/utils/membersCategory"
import techStacksCategory from "@pages/ProjectDetailPage/utils/techStacksCategory"

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
    techStacks: techStacksCategory(data.techStacks).map(
      ([category, techStacks]) => {
        return {
          category,
          data: techStacks.map((techStack) => ({ ...techStack.skill })),
        }
      },
    ),
    startDate: data.startDate,
    endDate: data.endDate,
    members: membersCategory(data.members).map(([category, members]) => {
      return {
        category,
        data: members.map((member) => ({ ...member.userSummary })),
      }
    }),
    description: data.description,
    troubleShooting: data.troubleShooting,
  }
}
