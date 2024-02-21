import {
  Box,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"

import ProjectCard from "@components/ProjectCard/ProjectCard"

const ProjectsView = () => {
  return (
    <Box
      height="100%"
      mt="2rem"
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
            {/* <Box>
              <ProjectCard imgUrl="https://picsum.photos/200" />
            </Box> */}
            <Grid
              mt="0.5rem"
              templateColumns="repeat(auto-fit, minmax(24rem, 1fr))"
              gap={3}
              // sx={{ "& > *": { border: "2px solid red" } }}
            >
              {Array.from({ length: 30 }, (_, idx) => idx + 1).map((idx) => (
                <GridItem key={idx}>
                  <ProjectCard
                    imgUrl="https://picsum.photos/200"
                    viewCount={idx}
                    heartCount={idx}
                    isFullHeart={true}
                    title="테스트입니다"
                    content="테스트입니다"
                  />
                </GridItem>
              ))}
              {/* <GridItem>
                <ProjectCard imgUrl="https://picsum.photos/200" />
              </GridItem>
              <GridItem>
                <ProjectCard imgUrl="https://picsum.photos/200" />
              </GridItem>
              <GridItem>
                <ProjectCard imgUrl="https://picsum.photos/200" />
              </GridItem>
              <GridItem>
                <ProjectCard imgUrl="https://picsum.photos/200" />
              </GridItem>
              <GridItem>
                <ProjectCard imgUrl="https://picsum.photos/200" />
              </GridItem>
              <GridItem>
                <ProjectCard imgUrl="https://picsum.photos/200" />
              </GridItem> */}
            </Grid>
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
  )
}

export default ProjectsView
