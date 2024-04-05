import { HStack, Text, useMediaQuery } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"
import dateToTimeago from "@pages/ProjectDetailPage/utils/datetoTimeago"

import BeforeEditingButton from "./Button/BeforeEditingButton"
import OnEditingButton from "./Button/OnEditingButton"

interface CommentTopProps {
  comment: Comment
}

const CommentTop = ({ comment }: CommentTopProps) => {
  const { isEditing, editTargetCommentId } = useCommentContext()
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

  return (
    <HStack
      justifyContent="space-between"
      w="100%"
      align="center">
      <HStack
        gap="1rem"
        align="center">
        <Text
          fontFamily="SCDream_Bold"
          fontSize="xl">
          {comment.user ? comment.user.nickname : "익명"}
        </Text>
        {isLargerThan768 && (
          <Text
            color="blue.100"
            fontSize="md">
            {dateToTimeago(comment.createdAt)}
          </Text>
        )}
      </HStack>
      <HStack>
        {comment.isOwner ? (
          editTargetCommentId === comment.id && isEditing ? (
            <OnEditingButton />
          ) : (
            <BeforeEditingButton
              isAnonymous={comment.isAnonymous}
              commentId={comment.id}
              content={comment.content}
            />
          )
        ) : null}
      </HStack>
    </HStack>
  )
}

export default CommentTop
