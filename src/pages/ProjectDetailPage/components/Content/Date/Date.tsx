import { HStack, Text } from "@chakra-ui/react"

import changeDateForm from "@pages/ProjectDetailPage/utils/changeDateForm"

interface DateProps {
  startDate: string
  endDate: string
}

const Date = ({ startDate, endDate }: DateProps) => {
  return (
    <HStack
      spacing="6rem"
      h="10rem">
      <Text
        fontSize="3xl"
        fontFamily="SCDream_Bold">
        프로젝트 기간
      </Text>
      <Text fontSize="xl">{changeDateForm(startDate, endDate)}</Text>
    </HStack>
  )
}

export default Date
