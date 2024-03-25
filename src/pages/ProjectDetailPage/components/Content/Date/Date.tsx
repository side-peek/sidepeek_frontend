import { HStack, Text } from "@chakra-ui/react"

import changeDateForm from "@pages/ProjectDetailPage/utils/changeDateForm"

import EmptyMessage from "../../EmptyMessage/EmptyMessage"

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
        <EmptyMessage type="DATE" />
      )}
    </HStack>
  )
}

export default Date
