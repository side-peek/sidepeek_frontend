import { HStack, Text, useMediaQuery } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"
import dateToTimeago from "@pages/ProjectDetailPage/utils/datetoTimeago"

import BeforeEditingButton from "./BeforeEditingButton"
import OnEditingButton from "./OnEditingButton"

interface CommentTitleProps {
  comment: Comment
}

const CommentTitle = ({ comment }: CommentTitleProps) => {
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
            color="grey.500"
            fontSize="md">
            {dateToTimeago(comment.createdAt)}
          </Text>
        )}
      </HStack>
      <HStack gap="1rem">
        {comment.isOwner ? (
          editTargetCommentId === comment.id && isEditing ? (
            <OnEditingButton />
          ) : (
            <BeforeEditingButton comment={comment} />
          )
        ) : null}
      </HStack>
    </HStack>
  )
}

export default CommentTitle
