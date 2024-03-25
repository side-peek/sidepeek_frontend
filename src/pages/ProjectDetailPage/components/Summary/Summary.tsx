import { Box, Center, Stack } from "@chakra-ui/react"
import { getProjectDetailResponseType } from "api-models"

import SummaryDetail from "./SummaryContent/SummaryDetail"
import SummaryTitle from "./SummaryTitle/SummaryTitle"
import SummaryTop from "./SummaryTop/SummaryTop"

const Summary = ({
  projectDetailInfo: {
    deployUrl,
    githubUrl,
    name,
    subName,
    overviewImageUrl,
    viewCount,
    likeCount,
    commentCount,
    overview,
    likeId,
    ownerId,
  },
}: getProjectDetailResponseType) => {
  return (
    <Box bg="whiteSmoke">
      <Stack
        maxW="128rem"
        m="0 auto"
        p="2rem 4rem">
        <Stack>
          <SummaryTop
            {...{
              likeCount,
              viewCount,
              commentCount,
              likeId,
              ownerId,
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
            <SummaryDetail
              {...{
                overviewImageUrl,
                overview,
                deployUrl,
                githubUrl,
              }}
            />
          </Center>
        </Stack>
      </Stack>
    </Box>
  )
}
export default Summary
