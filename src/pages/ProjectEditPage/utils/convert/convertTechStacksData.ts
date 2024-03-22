import { ProcessedTechStack } from "@utils/process/processTechStacks"

//서버에 보내기 위해 변환하는 유틸함수
export const convertTechStacksData = (techStacks: ProcessedTechStack[]) =>
  techStacks
    .map(({ category, data }) => {
      return data?.map(({ id }) => ({ skillId: id, category }))
    })
    ?.flat()
