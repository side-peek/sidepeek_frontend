import { StackDivider, VStack } from "@chakra-ui/react"
import { getProjectDetailResponseType } from "api-models"

import Date from "./Date/Date"
import TechStacks from "./TechStacks/TechStacks"

const Content = ({ projectDetailInfo }: getProjectDetailResponseType) => {
  const { techStacks, startDate, endDate } = projectDetailInfo

  return (
    <VStack
      alignItems="flex-start"
      divider={<StackDivider borderColor="grey.300" />}
      spacing={10}
      w="100%"
      margin="0 auto">
      <TechStacks techStacks={techStacks} />
      <Date {...{ startDate, endDate }} />
    </VStack>
  )
}

export default Content
