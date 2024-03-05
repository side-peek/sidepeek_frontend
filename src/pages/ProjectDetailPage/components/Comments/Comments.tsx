import { Flex } from "@chakra-ui/react"
import { Comment } from "api-models"

import CommentsInput from "./CommentsInput"
import CommentsList from "./CommentsList"

export interface CommentsProps {
  comments: Comment[]
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <Flex
      margin="0 auto"
      w="50%"
      maxW="128rem"
      borderRadius="1rem"
      border="1px"
      borderColor="grey.400"
      mt="10rem"
      direction="column">
      <CommentsInput />
      <CommentsList comments={comments} />
    </Flex>
  )
}

export default Comments
