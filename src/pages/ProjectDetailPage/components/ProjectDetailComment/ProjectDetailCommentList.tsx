import { TiPencil } from "react-icons/ti"
import { VscChromeClose } from "react-icons/vsc"
import { useParams } from "react-router-dom"

import { Avatar, Flex, Text } from "@chakra-ui/react"

import useDeleteCommentMutation from "@pages/ProjectDetailPage/hooks/mutations/useDeleteCommentMutation"

import { ProjectDetailCommentProps } from "./ProjectDetailComment"
import ProjectDetailCommentIcon from "./ProjectDetailCommentIcon"

const ProjectDetailCommentList = ({ comments }: ProjectDetailCommentProps) => {
  const { projectId } = useParams()

  const { deleteComment } = useDeleteCommentMutation(Number(projectId))

  const handleDelete = (id: number) => {
    deleteComment.mutate(id)
  }

  return (
    <Flex
      direction="column"
      gap="4rem"
      p="3rem">
      {comments.map((comment) => (
        <Flex
          justifyContent="space-between"
          key={comment.id}>
          <Flex
            gap="1rem"
            align="center">
            <Avatar
              cursor="pointer"
              _hover={{ opacity: "0.5" }}
              src={comment.owner.profileImageUrl}
              width="5rem"
              height="5rem"
            />
            <Flex
              direction="column"
              gap="0.5rem">
              <Text
                fontFamily="SCDream_Bold"
                fontSize="xl">
                {comment.owner.nickname}
              </Text>
              <Text fontSize="lg">{comment.content}</Text>
            </Flex>
          </Flex>
          {comment.isOwner && (
            <Flex
              gap="2rem"
              align="center">
              <ProjectDetailCommentIcon
                aria-label="edit"
                icon={<TiPencil />}
              />
              <ProjectDetailCommentIcon
                aria-label="delete"
                icon={<VscChromeClose />}
                onClick={() => handleDelete(Number(comment.id))}
              />
            </Flex>
          )}
        </Flex>
      ))}
    </Flex>
  )
}

export default ProjectDetailCommentList
