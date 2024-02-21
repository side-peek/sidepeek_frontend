import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"

// import ProjectCard from "@components/ProjectCard/ProjectCard"

const ProjectsView = () => {
  return (
    <Box
      height="100%"
      // mt="-30rem"
      // width="100%"
      // position="absolute"
      // overflow="hidden"
    >
      <Tabs
        size="lg"
        variant="enclosed">
        <TabList
          h="6rem"
          sx={{
            "& > *": {
              fontSize: "1.8rem",
              px: "3rem",
              borderTopRadius: "20px",
              _selected: { fontFamily: "SCDream_Bold", color: "#000000" },
            },
          }}>
          <Tab>내 프로젝트</Tab>
          <Tab>좋아요한 프로젝트</Tab>
          <Tab>댓글단 프로젝트</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>3!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>

    // <Box
    //   position="absolute"
    //   left="30rem"
    //   top="30rem">
    //   {/* <ProjectCard imgUrl="https://picsum.photos/200" /> */}
    // </Box>
  )
}

export default ProjectsView
