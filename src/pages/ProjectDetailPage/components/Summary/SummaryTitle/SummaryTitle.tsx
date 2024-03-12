import { Box, Text } from "@chakra-ui/react"

interface SummaryTitleProps {
  name: string
  subName: string
}

const SummaryTitle = ({ name, subName }: SummaryTitleProps) => {
  return (
    <Box>
      <Text
        fontFamily="SCDream_Bold"
        fontSize="3xl"
        textAlign="center">
        {name}
      </Text>
      <Text
        fontSize="2xl"
        textAlign="center">
        {subName}
      </Text>
    </Box>
  )
}

export default SummaryTitle
