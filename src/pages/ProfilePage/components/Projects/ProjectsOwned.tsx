import { Grid, GridItem } from "@chakra-ui/react"

import ProjectCard from "@components/ProjectCard/ProjectCard"

const ProjectsOwned = () => {
  return (
    <Grid
      mt="0.5rem"
      templateColumns="repeat(auto-fill, minmax(24rem, 1fr))"
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
    </Grid>
  )
}
export default ProjectsOwned
