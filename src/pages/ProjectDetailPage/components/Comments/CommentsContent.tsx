// TODO: 1. 포커스 자동 조정
//       2. autoFocus 구현(옵션으로 사용하면 오류남)
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { TiPencil } from "react-icons/ti"
import { VscChromeClose } from "react-icons/vsc"
import { useParams } from "react-router-dom"
import ResizeTextarea from "react-textarea-autosize"

import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react"
import { Comment } from "api-models"

import useDeleteCommentMutation from "@pages/ProjectDetailPage/hooks/mutations/useDeleteCommentMutation"
import useEditCommentMutation from "@pages/ProjectDetailPage/hooks/mutations/useEditCommentMutation"

import { FormValues } from "../../types/formValues"
import CommentsIcon from "./CommentsIcon"

interface CommentsContentProps {
  comment: Comment
}

const CommentsContent = ({ comment }: CommentsContentProps) => {
  const { register, handleSubmit, setValue, reset } = useForm<FormValues>()
  const [isEditing, setIsEditing] = useState(false)

  const { projectId } = useParams()

  const { deleteCommentMutation } = useDeleteCommentMutation(Number(projectId))
  const { editCommentMutation } = useEditCommentMutation(
    Number(projectId),
    Number(comment.id),
  )

  useEffect(() => {
    setValue("content", comment.content)
  }, [isEditing, setValue, comment.content])

  const handleStartEdit = () => {
    setIsEditing(true)
  }

  const handleDelete = (id: number) => {
    deleteCommentMutation.mutate(id)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    reset()
  }

  const onEditSubmit: SubmitHandler<FormValues> = (text) => {
    const req = {
      ownerId: comment.owner.id,
      isAnonymous: false,
      content: text.content,
    }
    editCommentMutation.mutate(req)
    setIsEditing(false)
  }

  return (
    <Box w="100%">
      <form
        onSubmit={handleSubmit(onEditSubmit)}
        style={{ width: "100%" }}>
        <Flex
          justifyContent="space-between"
          w="100%">
          <Flex
            direction="column"
            gap="1rem"
            flex="9.5">
            <Text
              fontFamily="SCDream_Bold"
              fontSize="xl">
              {comment.owner.nickname}
            </Text>
            {isEditing ? (
              <Textarea
                height="fit-content"
                rows={1}
                w="100%"
                border="none"
                borderColor="grey.400"
                fontSize="lg"
                p="0"
                as={ResizeTextarea}
                isRequired={false}
                resize="none"
                {...register("content")}
              />
            ) : (
              <Text fontSize="lg">{comment.content}</Text>
            )}
          </Flex>
          <Flex
            gap="1rem"
            flex="0.5"
            height="fit-content">
            {isEditing ? (
              <>
                <Button
                  type="submit"
                  background="none"
                  p="0"
                  fontSize="lg"
                  _hover={{ border: "none", opacity: "0.5" }}>
                  확인
                </Button>
                <Button
                  type="button"
                  background="none"
                  p="0"
                  fontSize="lg"
                  _hover={{ border: "none", opacity: "0.5" }}
                  onClick={handleCancelEdit}>
                  취소
                </Button>
              </>
            ) : (
              comment.isOwner && (
                <>
                  <CommentsIcon
                    aria-label="edit"
                    icon={<TiPencil />}
                    onClick={handleStartEdit}
                  />
                  <CommentsIcon
                    aria-label="delete"
                    icon={<VscChromeClose />}
                    onClick={() => handleDelete(Number(comment.id))}
                  />
                </>
              )
            )}
          </Flex>
        </Flex>
      </form>
    </Box>
  )
}

export default CommentsContent
