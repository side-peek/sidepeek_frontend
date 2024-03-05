import { Grid, GridItem } from "@chakra-ui/react"

import ProjectCard from "@components/ProjectCard/ProjectCard"

import { useLikedProjects } from "./Projects.model"

const ProjectsLiked = () => {
  const { data } = useLikedProjects()

  const { projects } = data || {}

  return (
    <Grid
      mt="0.5rem"
      templateColumns="repeat(auto-fill, minmax(24rem, 1fr))"
      gap={0}>
      {projects &&
        projects
          .filter((project) => project.isLiked === true)
          .map(
            ({
              id,
              thumbnailUrl,
              viewCount,
              likeCount,
              isLiked,
              name,
              subName,
            }) => (
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
  )
}

export default ProjectsLiked
