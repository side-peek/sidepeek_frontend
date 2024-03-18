import { Box, Text, useMediaQuery } from "@chakra-ui/react"

interface SummaryTitleProps {
  name: string
  subName: string
}

const SummaryTitle = ({ name, subName }: SummaryTitleProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])

  return (
    <Box>
      <Text
        fontFamily="SCDream_Bold"
        fontSize={isLargerThan1200 ? "2xl" : "lg"}
        textAlign="center">
        {name}
      </Text>
      <Text
        fontSize={isLargerThan1200 ? "2xl" : "lg"}
        textAlign="center">
        {subName}
      </Text>
    </Box>
  )
}
export default SummaryTitle
