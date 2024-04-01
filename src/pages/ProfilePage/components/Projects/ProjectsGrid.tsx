import { useState } from "react"

import { Center, Grid, GridItem, Text } from "@chakra-ui/react"

import PaginationRQ from "@components/PaginationRQ/PaginationRQ"
import ProjectCard from "@components/ProjectCard/ProjectCard"

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

interface ProjectsGridProps {
  userId: string
  type: string
}
const ProjectsGrid = ({ userId, type }: ProjectsGridProps) => {
  const [page, setPage] = useState(1)
  const { data } = useUserProjects({
    userId: Number(userId),
    type: type,
    page: page - 1,
    size: 24,
  })

  const totalProjectsCount = data?.totalElements
  const projects = data?.data

  return (
    <>
      {projects && projects.length !== 0 ? (
        <>
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
                      url={`/project/${id}`}
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
          <Center my="2rem">
            <PaginationRQ
              tab={type}
              limit={24}
              totalProjectsCount={totalProjectsCount}
              setPage={setPage}
            />
          </Center>
        </>
      ) : (
        <Center my="4rem">
          <Text
            fontSize="1.2rem"
            color="grey.500">
            프로젝트가 없습니다
          </Text>
        </Center>
      )}
    </>
  )
}

export default ProjectsGrid
