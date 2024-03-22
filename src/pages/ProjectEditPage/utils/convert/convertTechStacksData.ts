import { Skill } from "api-models"

//서버에 보내기 위해 변환하는 유틸함수
export const convertTechStacksData = (
  techStacks: { category: string; skill: Skill[] }[],
) =>
  techStacks
    .map(({ category, skill }) => {
      return skill?.map(({ id }) => ({ skillId: id, category }))
    })
    ?.flat()
