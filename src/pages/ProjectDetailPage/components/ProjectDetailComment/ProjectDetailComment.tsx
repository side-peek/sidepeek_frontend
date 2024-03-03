import { Flex } from "@chakra-ui/react"
import { Comment } from "api-models"

import ProjectDetailCommentList from "./ProjectDetailCommentList"

export interface ProjectDetailCommentProps {
  comments: Comment[]
}

const ProjectDetailComment = ({ comments }: ProjectDetailCommentProps) => {
  return (
    <Flex
      margin="0 auto"
      w="80%"
      borderRadius="1rem"
      border="1px"
      borderColor="grey.400"
      px="2rem"
      py="1.5rem"
      mt="10rem"
      direction="column">
      <div>input</div>
      <ProjectDetailCommentList comments={comments} />
    </Flex>
  )
}

export default ProjectDetailComment
