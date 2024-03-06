import { StackDivider, VStack } from "@chakra-ui/react"
import { getProjectDetailResponseType } from "api-models"

import Date from "./Date/Date"
import Explanation from "./Explanation/Explanation"
import MemberInfo from "./MemberInfo/MemberInfo"
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
      <MemberInfo members={projectDetailInfo.members} />
      <Explanation projects={projectDetailInfo} />
    </VStack>
  )
}

export default Content
