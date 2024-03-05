import { Box, Center, Flex } from "@chakra-ui/react"
import { Project } from "api-models"

import SummaryContent from "./SummaryContent/SummaryContent"
import SummaryTitle from "./SummaryTitle/SummaryTitle"
import SummaryTop from "./SummaryTop/SummaryTop"

interface SummaryProps {
  projects: Project[]
}

const Summary = ({ projects }: SummaryProps) => {
  const {
    deployUrl,
    githubUrl,
    name,
    subName,
    overviewImageUrl,
    viewCount,
    likeCount,
    commentCount,
    overview,
  } = projects[0]
  return (
    <Box bg="whiteSmoke">
      <Flex
        maxW="128rem"
        flexDirection="column"
        m="0 auto"
        p="2rem">
        <Flex flexDirection="column">
          <SummaryTop
            {...{
              likeCount,
              viewCount,
              commentCount,
            }}
          />

          <Center
            flexDirection="column"
            gap="5rem">
            <SummaryTitle
              name={name}
              subName={subName}
            />
            <SummaryContent
              {...{
                overviewImageUrl,
                overview,
                deployUrl,
                githubUrl,
              }}
            />
          </Center>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Summary
