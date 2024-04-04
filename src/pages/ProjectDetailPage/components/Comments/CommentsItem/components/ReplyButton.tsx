import { Button, useMediaQuery } from "@chakra-ui/react"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

interface ReplyButtonProps {
  onReply: boolean
  commentId: number
}

const ReplyButton = ({ onReply, commentId }: ReplyButtonProps) => {
  const { handleOnReply, handleOffReply } = useCommentContext()
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

  return onReply ? (
    <Button
      p="0"
      _hover={{ opacity: "0.5" }}
      size={isLargerThan768 ? "md" : "sm"}
      onClick={handleOffReply}>
      취소
    </Button>
  ) : (
    <Button
      size={isLargerThan768 ? "md" : "sm"}
      onClick={() => handleOnReply(commentId)}
      _hover={{ opacity: 0.5 }}
      p="0">
      답글달기
    </Button>
  )
}

export default ReplyButton
