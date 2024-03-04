import { TiPencil } from "react-icons/ti"
import { VscChromeClose } from "react-icons/vsc"

import { Flex, Text } from "@chakra-ui/react"
import { Comment } from "api-models"

import ProjectDetailCommentIcon from "./ProjectDetailCommentIcon"

interface ProjectDetailCommentContentProps {
  comment: Comment
  handleDelete: (id: number) => void
}

const ProjectDetailCommentContent = ({
  comment,
  handleDelete,
}: ProjectDetailCommentContentProps) => {
  return (
    <Flex
      justifyContent="space-between"
      gap="0.5rem"
      w="100%">
      <Flex
        direction="column"
        gap="1rem">
        <Text
          fontFamily="SCDream_Bold"
          fontSize="xl">
          {comment.owner.nickname}
        </Text>
        <Text fontSize="lg">{comment.content}</Text>
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
  )
}

export default ProjectDetailCommentContent
