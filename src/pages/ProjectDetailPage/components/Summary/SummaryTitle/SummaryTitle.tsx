import { Box, Text, useMediaQuery } from "@chakra-ui/react"

interface SummaryTitleProps {
  name: string
  subName: string
}

const SummaryTitle = ({ name, subName }: SummaryTitleProps) => {
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

  return (
    <Box>
      <Text
        fontFamily="SCDream_Bold"
        fontSize={isLargerThan768 ? "3xl" : "2.5rem"}
        textAlign="center">
        {name}
      </Text>
      <Text
        fontSize={isLargerThan768 ? "3xl" : "2.5rem"}
        textAlign="center">
        {subName}
      </Text>
    </Box>
  )
}
export default SummaryTitle
