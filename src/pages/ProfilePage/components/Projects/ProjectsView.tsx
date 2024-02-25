import {
  Box,
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react"

import { useQuery } from "@tanstack/react-query"

import { getAllProjects } from "@/api/project/getAllProjects"

import ProjectCard from "@components/ProjectCard/ProjectCard"

const ProjectsView = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjects(),
    gcTime: 0,
  })
  console.log(projects)

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
            <Grid
              mt="0.5rem"
              templateColumns="repeat(auto-fit, minmax(24rem, 1fr))"
              gap={0}>
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
