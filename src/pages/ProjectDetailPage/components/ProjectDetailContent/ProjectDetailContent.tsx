import { StackDivider, VStack } from "@chakra-ui/react"
import { getProjectDetailResponseType } from "api-models"

import ProjectDetailDate from "./ProjectDetailDate/ProjectDetailDate"
import ProjectDetailMembers from "./ProjectDetailMembers/ProjectDetailMembers"
import ProjectDetailTechStacks from "./ProjectDetailTechStacks/ProjectDetailTechStacks"

const ProjectDetailContent = ({
  projectDetailInfo,
}: getProjectDetailResponseType) => {
  const { techStacks } = projectDetailInfo

  return (
    <VStack
      maxW="128rem"
      alignItems="flex-start"
      pt="3rem"
      pl="3rem"
      divider={<StackDivider borderColor="grey.200" />}
      spacing={4}
      margin="0 auto"
      align="stretch">
      <ProjectDetailTechStacks techStacks={techStacks} />
      <ProjectDetailDate />
      <ProjectDetailMembers />
    </VStack>
  )
}

export default ProjectDetailContent
