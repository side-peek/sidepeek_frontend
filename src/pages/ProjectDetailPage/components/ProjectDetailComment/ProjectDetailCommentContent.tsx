import { useState } from "react"
import { useForm } from "react-hook-form"
import { TiPencil } from "react-icons/ti"
import { VscChromeClose } from "react-icons/vsc"
import { useParams } from "react-router-dom"

import { Button, Flex, Text, Textarea } from "@chakra-ui/react"
import { Comment } from "api-models"

import useDeleteCommentMutation from "@pages/ProjectDetailPage/hooks/mutations/useDeleteCommentMutation"

import ProjectDetailCommentIcon from "./ProjectDetailCommentIcon"

interface ProjectDetailCommentContentProps {
  comment: Comment
}

const ProjectDetailCommentContent = ({
  comment,
}: ProjectDetailCommentContentProps) => {
  const { register, handleSubmit } = useForm()

  const { projectId } = useParams()

  const { deleteComment } = useDeleteCommentMutation(Number(projectId))

  const handleDelete = (id: number) => {
    deleteComment.mutate(id)
  }

  const [isEditing, setIsEditing] = useState(false)

  const handleStartEdit = () => {
    setIsEditing(true)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
  }

  const onEdit = () => {}

  return (
    <Flex w="100%">
      <form
        onSubmit={handleSubmit(onEdit)}
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
                rows={1}
                w="100%"
                border="none"
                borderColor="grey.400"
                fontSize="lg"
                p="0"
                isRequired={false}
                value={comment.content}
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
                  <ProjectDetailCommentIcon
                    aria-label="edit"
                    icon={<TiPencil />}
                    onClick={handleStartEdit}
                  />
                  <ProjectDetailCommentIcon
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
    </Flex>
  )
}

export default ProjectDetailCommentContent
