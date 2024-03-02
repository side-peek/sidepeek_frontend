import { StackDivider, VStack } from "@chakra-ui/react"
import { getProjectDetailResponseType } from "api-models"

import ProjectDetailDate from "./ProjectDetailDate/ProjectDetailDate"
import ProjectDetailMembers from "./ProjectDetailMembers/ProjectDetailMembers"
import ProjectDetailTechStacks from "./ProjectDetailTechStacks/ProjectDetailTechStacks"

const ProjectDetailContent = ({
  projectDetailInfo,
}: getProjectDetailResponseType) => {
  const { techStacks, startDate, endDate } = projectDetailInfo

  return (
    <VStack
      maxW="128rem"
      alignItems="flex-start"
      divider={<StackDivider borderColor="grey.200" />}
      spacing={4}
      margin="0 auto"
      mt="5rem"
      align="stretch">
      <ProjectDetailTechStacks techStacks={techStacks} />
      <ProjectDetailDate {...{ startDate, endDate }} />
      <ProjectDetailMembers />
    </VStack>
  )
}

export default ProjectDetailContent
