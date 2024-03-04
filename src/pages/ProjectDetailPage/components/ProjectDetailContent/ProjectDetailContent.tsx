import { StackDivider, VStack } from "@chakra-ui/react"
import { getProjectDetailResponseType } from "api-models"

import ProjectDetailDate from "./ProjectDetailDate/ProjectDetailDate"
import ProjectDetailTechStacks from "./ProjectDetailTechStacks/ProjectDetailTechStacks"

const ProjectDetailContent = ({
  projectDetailInfo,
}: getProjectDetailResponseType) => {
  const { techStacks, startDate, endDate } = projectDetailInfo

  return (
    <VStack
      alignItems="flex-start"
      divider={<StackDivider borderColor="grey.300" />}
      spacing={10}
      w="100%"
      margin="0 auto"
      mt="5rem">
      <ProjectDetailTechStacks techStacks={techStacks} />
      <ProjectDetailDate {...{ startDate, endDate }} />
      {/* <ProjectDetailMembers /> */}
    </VStack>
  )
}

export default ProjectDetailContent
