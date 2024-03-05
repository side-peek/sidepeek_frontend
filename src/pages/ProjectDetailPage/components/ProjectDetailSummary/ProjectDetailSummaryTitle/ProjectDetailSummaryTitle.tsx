import { Box, Text } from "@chakra-ui/react"

interface ProjectDetailSummaryTitleProps {
  name: string
  subName: string
}

const ProjectDetailSummaryTitle = ({
  name,
  subName,
}: ProjectDetailSummaryTitleProps) => {
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

export default ProjectDetailSummaryTitle
