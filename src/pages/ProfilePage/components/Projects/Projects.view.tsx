import {
  Box,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react"

import StyledTab from "@pages/ProfilePage/styles/StyledTab"

import ProjectsCommented from "./ProjectsCommented"
import ProjectsLiked from "./ProjectsLiked"
import ProjectsOwned from "./ProjectsOwned"

const ProjectsView = () => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
  return (
    <Box
      height="100%"
      mt="2rem">
      <Tabs
        size="lg"
        isFitted={!isLargerThan500}
        variant="enclosed">
        <TabList
          h="6rem"
          sx={{
            "& > *": {
              _selected: { fontFamily: "SCDream_Bold", color: "#000000" },
            },
          }}>
          <StyledTab>내 프로젝트</StyledTab>
          <StyledTab>좋아요한 프로젝트</StyledTab>
          <StyledTab>댓글단 프로젝트</StyledTab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProjectsOwned />
          </TabPanel>
          <TabPanel>
            <ProjectsLiked />
          </TabPanel>
          <TabPanel>
            <ProjectsCommented />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default ProjectsView
