import { useState } from "react"

import { Center, Grid, GridItem } from "@chakra-ui/react"

import Pagination from "@components/Pagination/Pagination"
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
    size: 12,
  })

  const totalProjectsCount = data?.totalElements
  const projects = data?.data

  return (
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
        <Pagination
          totalProjectsCount={totalProjectsCount}
          setPage={setPage}
        />
      </Center>
    </>
  )
}

export default ProjectsGrid
