import { ForwardedRef, forwardRef } from "react"
import { Link } from "react-router-dom"

import { Center, Grid, Skeleton, Text } from "@chakra-ui/react"
import { getAllProjectsResponseType } from "api-models"

import { InfiniteData } from "@tanstack/react-query"

import ProjectCard from "@components/ProjectCard/ProjectCard"

interface ProjectListProps {
  projects: InfiniteData<getAllProjectsResponseType, unknown> | undefined
  isLoading: boolean
}

const ProjectList = forwardRef(
  (
    { projects, isLoading }: ProjectListProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const projectCount = projects?.pages[0].totalElements

    return (
      <Grid
        mt="0.5rem"
        templateColumns={
          projectCount ? "repeat(auto-fill, minmax(24rem, 1fr))" : ""
        }
        gap={0}>
        {!projectCount ? (
          <Center>
            <Text fontSize="2xl">프로젝트가 없습니다</Text>
          </Center>
        ) : (
          projects?.pages.map((projectList) => {
            return projectList.content.map((project) => (
              <Center key={project.id}>
                <Skeleton
                  width="95%"
                  borderRadius="1rem"
                  isLoaded={!isLoading}>
                  <Link to={`/project/${project.id}`}>
                    <ProjectCard
                      imgUrl={project.thumbnailUrl}
                      viewCount={project.viewCount}
                      heartCount={project.likeCount}
                      isFullHeart={project.isLiked}
                      title={project.name}
                      content={project.subName}
                      ref={ref}
                    />
                  </Link>
                </Skeleton>
              </Center>
            ))
          })
        )}
      </Grid>
    )
  },
)

ProjectList.displayName = "ProjectList"

export default ProjectList
