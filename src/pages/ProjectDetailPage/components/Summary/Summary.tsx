import { Box, Center, Flex } from "@chakra-ui/react"
import { getProjectDetailResponseType } from "api-models"

import SummaryContent from "./SummaryContent/SummaryContent"
import SummaryTitle from "./SummaryTitle/SummaryTitle"
import SummaryTop from "./SummaryTop/SummaryTop"

const Summary = ({ projectDetailInfo }: getProjectDetailResponseType) => {
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
  } = projectDetailInfo
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
              {...{
                name,
                subName,
              }}
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
