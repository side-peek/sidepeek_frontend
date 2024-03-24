import { ForwardedRef, forwardRef } from "react"

import { Center, Grid, Spinner, Text } from "@chakra-ui/react"
import { getAllProjectsResponseType } from "api-models"

import { InfiniteData } from "@tanstack/react-query"

import ProjectCard from "@components/ProjectCard/ProjectCard"

interface ProjectListProps {
  projects: InfiniteData<getAllProjectsResponseType, unknown> | undefined
  isLoading: boolean
  isFetchingNextPage?: boolean
  projectCount: number
}

const ProjectList = forwardRef(
  (
    { projects, isLoading, isFetchingNextPage, projectCount }: ProjectListProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Grid
        mt="0.5rem"
        templateColumns={
          projectCount ? "repeat(auto-fill, minmax(24rem, 1fr))" : ""
        }
        gap={0}
        ref={ref}>
        {!projectCount && !isLoading ? (
          <Center h="15rem">
            <Text
              fontSize="2xl"
              color="gray.500">
              프로젝트가 없습니다
            </Text>
          </Center>
        ) : (
          projects?.pages.map((projectList) => {
            return projectList.content.map((project) => (
              <Center key={project.id}>
                <ProjectCard
                  imgUrl={project.thumbnailUrl}
                  viewCount={project.viewCount}
                  heartCount={project.likeCount}
                  isFullHeart={project.isLiked}
                  title={project.name}
                  content={project.subName}
                  url={`/project/${project.id}`}
                />
              </Center>
            ))
          })
        )}
        {isFetchingNextPage ? <Spinner /> : null}
      </Grid>
    )
  },
)

ProjectList.displayName = "ProjectList"

export default ProjectList
