import { useState } from "react"

import {
  Box,
  Grid,
  GridItem,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react"

import Pagination from "@components/Pagination/Pagination"
import ProjectCard from "@components/ProjectCard/ProjectCard"

import StyledTab from "@pages/ProfilePage/styles/StyledTab"

import { useUserProjects } from "./Projects.model"

interface ProjectProperties {
  id: number
  name: string
  subName: string
  isLiked: boolean
  thumbnailUrl: string
  viewCount: number
  likeCount: number
}

const ProjectsView = () => {
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
  const [page, setPage] = useState(0)
  console.log(page)

  const { data } = useUserProjects({
    userId: 1,
    type: "JOINED",
    page: page - 1,
    size: 12,
  })

  const totalProjectsCount = data?.totalElements
  const projects = data?.data

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
          {/* <StyledTab>좋아요한 프로젝트</StyledTab>
          <StyledTab>댓글단 프로젝트</StyledTab> */}
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* <ProjectsOwned /> */}
            <Grid
              mt="0.5rem"
              templateColumns="repeat(auto-fill, minmax(24rem, 1fr))"
              gap={0}>
              {projects &&
                projects.map(
                  ({
                    id,
                    name,
                    subName,
                    isLiked,
                    thumbnailUrl,
                    viewCount,
                    likeCount,
                  }: ProjectProperties) => (
                    <GridItem key={id}>
                      <ProjectCard
                        imgUrl={thumbnailUrl}
                        viewCount={viewCount}
                        heartCount={likeCount}
                        isFullHeart={isLiked}
                        title={name}
                        content={subName}
                      />
                    </GridItem>
                  ),
                )}
            </Grid>
          </TabPanel>
          {/* <TabPanel>
            <ProjectsLiked />
          </TabPanel>
          <TabPanel>
            <ProjectsCommented />
          </TabPanel> */}
          <Pagination
            totalProjectsCount={totalProjectsCount}
            setPage={setPage}
          />
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default ProjectsView
