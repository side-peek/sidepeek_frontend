import { HStack, Text } from "@chakra-ui/react"

import changeDateForm from "@pages/ProjectDetailPage/utils/changeDateForm"

interface ProjectDetailDateProps {
  startDate: string
  endDate: string
}

const ProjectDetailDate = ({ startDate, endDate }: ProjectDetailDateProps) => {
  return (
    <HStack
      spacing="6rem"
      h="10rem">
      <Text
        fontSize="2xl"
        fontFamily="SCDream_Bold">
        프로젝트 기간
      </Text>
      <Text fontSize="xl">{changeDateForm(startDate, endDate)}</Text>
    </HStack>
  )
}

export default ProjectDetailDate
