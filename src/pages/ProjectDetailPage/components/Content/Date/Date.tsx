import { HStack, Text } from "@chakra-ui/react"

import { EMPTY_MESSAGE } from "@pages/ProjectDetailPage/constants/emptyMessage"
import changeDateForm from "@pages/ProjectDetailPage/utils/changeDateForm"

interface DateProps {
  startDate: string
  endDate: string
}

const Date = ({ startDate, endDate }: DateProps) => {
  return (
    <HStack spacing="3rem">
      <Text
        fontSize="2xl"
        fontFamily="SCDream_Bold">
        프로젝트 기간
      </Text>
      {startDate && endDate ? (
        <Text fontSize="xl">{changeDateForm(startDate, endDate)}</Text>
      ) : (
        <Text
          color="grey.500"
          fontSize="lg">
          {EMPTY_MESSAGE.DATE}
        </Text>
      )}
    </HStack>
  )
}

export default Date
