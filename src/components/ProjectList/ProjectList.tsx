import { Link } from "react-router-dom"

import { Grid, GridItem } from "@chakra-ui/react"
import { AllProject } from "api-models"

import ProjectCard from "@components/ProjectCard/ProjectCard"

import ProjectListSkeleton from "./components/ProjectListSkeleton"

interface ProjectListProps {
  isLoading: boolean
  projectList: AllProject[]
}

const ProjectList = ({ isLoading, projectList }: ProjectListProps) => {
  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={4}>
      {isLoading ? (
        <ProjectListSkeleton />
      ) : (
        projectList?.map((project) => (
          <GridItem key={project.id}>
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
          </GridItem>
        ))
      )}
    </Grid>
  )
}

export default ProjectList
