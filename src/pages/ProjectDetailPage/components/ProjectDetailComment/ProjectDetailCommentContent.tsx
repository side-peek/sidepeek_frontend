import { useState } from "react"
import { useForm } from "react-hook-form"
import { TiPencil } from "react-icons/ti"
import { VscChromeClose } from "react-icons/vsc"
import { useParams } from "react-router-dom"

import { Button, Flex, Text } from "@chakra-ui/react"
import { Comment } from "api-models"

import CommonInput from "@components/Input/CommonInput"

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
          direction="row"
          w="100%"
          gap="0.5rem">
          <Flex
            direction="column"
            gap="1rem">
            <Text
              fontFamily="SCDream_Bold"
              fontSize="xl">
              {comment.owner.nickname}
            </Text>
            {isEditing ? (
              <CommonInput
                inputWidth="100%"
                border="none"
                borderColor="grey.400"
                fontSize="lg"
                p="0"
                isRequired={false}
                value={comment.content}
                register={{
                  ...register("content"),
                }}
              />
            ) : (
              <Text fontSize="lg">{comment.content}</Text>
            )}
          </Flex>
          <Flex
            gap="1rem"
            align="center">
            {isEditing ? (
              <>
                <Button
                  type="submit"
                  _hover={{ border: "none", opacity: "0.5" }}>
                  확인
                </Button>
                <Button
                  type="button"
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
