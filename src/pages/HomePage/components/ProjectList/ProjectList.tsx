import { Link } from "react-router-dom"

import { Center, Grid, Skeleton } from "@chakra-ui/react"
import { getAllProjectsResponseType } from "api-models"

import { InfiniteData } from "@tanstack/react-query"

import ProjectCard from "@components/ProjectCard/ProjectCard"

interface ProjectListProps {
  projects: InfiniteData<getAllProjectsResponseType, unknown> | undefined
  isLoading: boolean
}

const ProjectList = ({ projects, isLoading }: ProjectListProps) => {
  return (
    <Grid
      mt="0.5rem"
      templateColumns="repeat(auto-fill, minmax(24rem, 1fr))"
      gap={0}>
      {projects?.pages.map((projectList) => {
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
                />
              </Link>
            </Skeleton>
          </Center>
        ))
      })}
    </Grid>
  )
}

export default ProjectList
