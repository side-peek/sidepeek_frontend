import { UseFormRegisterReturn } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { Box, Button, HStack, Stack, useMediaQuery } from "@chakra-ui/react"
import { Comment } from "api-models"

import { useCommentContext } from "@pages/ProjectDetailPage/store/CommentContext"

import CommentsForm from "../CommentsForm/CommentsForm"
import CommentTitle from "./components/CommentTitle"
import CommentsAvatar from "./components/CommentsAvatar"
import CommentsEditFormText from "./components/CommentsEditFormText"
import ReplyComment from "./components/ReplyComment"

interface CommentsItemProps {
  comment: Comment
  register: UseFormRegisterReturn
}

const CommentsItem = ({ comment, register }: CommentsItemProps) => {
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])
  const navigate = useNavigate()

  const handleNavigateProfile = (userId: number) => {
    navigate(`/profile/${userId}`)
  }

  const { replyTargetCommentId, isReply, handleOnReply, handleOffReply } =
    useCommentContext()

  return (
    <Stack
      w="100%"
      gap="3rem">
      <HStack
        w="100%"
        gap={isLargerThan768 ? "2rem" : "1.3rem"}
        align="flex-start">
        <CommentsAvatar
          onClick={() => {
            if (comment.user && comment.user.id) {
              handleNavigateProfile(comment.user.id)
            }
          }}
          user={comment.user}
        />
        <Box w="100%">
          <HStack
            justifyContent="space-between"
            w="100%">
            <Stack
              w="100%"
              gap="1rem"
              align="flex-start">
              <CommentTitle comment={comment} />
              <CommentsEditFormText
                {...{
                  comment,
                  register,
                }}
              />
              {!comment.parentId &&
                (isReply ? (
                  comment.id === replyTargetCommentId && (
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
                    onClick={() => handleOnReply(comment.id)}
                    p="0">
                    답글달기
                  </Button>
                ))}
            </Stack>
          </HStack>
        </Box>
      </HStack>
      {comment.replies && (
        <ReplyComment
          comment={comment.replies}
          {...{
            register,
          }}
        />
      )}
    </Stack>
  )
}

export default CommentsItem
