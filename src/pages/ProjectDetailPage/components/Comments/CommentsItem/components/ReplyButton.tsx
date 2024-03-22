import { Button, useMediaQuery } from "@chakra-ui/react"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

import CommentsForm from "../../CommentsForm/CommentsForm"

interface ReplyButtonProps {
  parentId?: number
  commentId: number
}

const ReplyButton = ({ parentId, commentId }: ReplyButtonProps) => {
  const { replyTargetCommentId, isReply, handleOnReply, handleOffReply } =
    useCommentContext()
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

  return (
    !parentId &&
    (isReply ? (
      commentId === replyTargetCommentId && (
        <>
          <CommentsForm
            parentId={replyTargetCommentId}
            isReplyComment
          />
          <Button
            p="0"
            _hover={{ opacity: "0.5" }}
            fontSize={isLargerThan768 ? "md" : "sm"}
            onClick={handleOffReply}>
            취소
          </Button>
        </>
      )
    ) : (
      <Button
        size={isLargerThan768 ? "md" : "sm"}
        onClick={() => handleOnReply(commentId)}
        _hover={{ opacity: 0.5 }}
        p="0">
        답글달기
      </Button>
    ))
  )
}

export default ReplyButton
