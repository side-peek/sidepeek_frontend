import { Avatar, Flex } from "@chakra-ui/react"

import { CommentsProps } from "./Comments"
import CommentsContent from "./CommentsContent"

const CommentsList = ({ comments }: CommentsProps) => {
  return (
    <Flex
      direction="column"
      gap="4rem"
      p="2rem">
      {comments.map((comment) => (
        <Flex
          justifyContent="space-between"
          align="center"
          key={comment.id}>
          <Flex
            gap="2rem"
            w="100%"
            align="center">
            <Avatar
              cursor="pointer"
              _hover={{ opacity: "0.5" }}
              src={comment.owner.profileImageUrl}
              width="5rem"
              height="5rem"
            />
            <CommentsContent comment={comment} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default CommentsList
