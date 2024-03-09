import { Stack } from "@chakra-ui/react"

import { CommentsProps } from "./Comments"
import CommentsItem from "./CommentsItem"

const CommentsList = ({ comments }: CommentsProps) => {
  // TODO: 1. 익명일때 프로필페이지 못넘어 가는거 Modal or Toast 처리 + 로그인한유저만 넘어가도록 수정

  return (
    <Stack
      w="100%"
      gap="4rem"
      p="2rem">
      {comments.map((comment) => (
        <CommentsItem
          comment={comment}
          key={comment.id}
        />
      ))}
    </Stack>
  )
}

export default CommentsList
