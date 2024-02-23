import { Center, Flex } from "@chakra-ui/react"

import ProjectDetailSummaryContent from "./ProjectDetailSummaryContent/ProjectDetailSummaryContent"
import ProjectDetailSummaryTitle from "./ProjectDetailSummaryTitle/ProjectDetailSummaryTitle"
import ProjectDetailSummaryTop from "./ProjectDetailSummaryTop/ProjectDetailSummaryTop"

const ProjectDetailSummary = () => {
  return (
    <>
      <Flex
        maxW="128rem"
        bg="#f5f5f5"
        w="100%"
        h="53rem"
        gap="15rem"
        flexDirection="column"
        m="0 auto"
        p="2rem">
        <Flex flexDirection="column">
          <ProjectDetailSummaryTop />

          <Center
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="5rem">
            <ProjectDetailSummaryTitle />
            <ProjectDetailSummaryContent />
          </Center>
        </Flex>
      </Flex>
    </>
  )
}

export default ProjectDetailSummary
