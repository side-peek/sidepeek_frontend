import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react"

import ProjectsCommented from "./ProjectsCommented"
import ProjectsLiked from "./ProjectsLiked"
import ProjectsOwned from "./ProjectsOwned"

const ProjectsView = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")

  return (
    <Box
      height="100%"
      mt="2rem">
      <Tabs
        size="lg"
        variant="enclosed">
        <TabList
          h="6rem"
          sx={{
            "& > *": {
              fontSize: isLargerThan1200 ? "1.8rem" : "1rem",
              px: "3rem",
              borderTopLeftRadius: isLargerThan1200 ? "20px" : "20px",
              borderTopRightRadius: isLargerThan1200 ? "20px" : "20px",
              _selected: { fontFamily: "SCDream_Bold", color: "#000000" },
            },
          }}>
          <Tab>내 프로젝트</Tab>
          <Tab>좋아요한 프로젝트</Tab>
          <Tab>댓글단 프로젝트</Tab>
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
