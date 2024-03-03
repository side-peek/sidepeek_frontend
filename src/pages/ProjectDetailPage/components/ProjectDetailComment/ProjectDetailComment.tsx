import { Flex } from "@chakra-ui/react"
import { Comment } from "api-models"

import ProjectDetailCommentInput from "./ProjectDetailCommentInput"
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
      mt="10rem"
      direction="column">
      <ProjectDetailCommentInput />
      <ProjectDetailCommentList comments={comments} />
    </Flex>
  )
}

export default ProjectDetailComment
