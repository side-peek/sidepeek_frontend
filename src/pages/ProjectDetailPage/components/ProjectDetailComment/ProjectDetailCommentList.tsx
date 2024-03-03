import { TiPencil } from "react-icons/ti"
import { VscChromeClose } from "react-icons/vsc"

import { Avatar, Flex, Text } from "@chakra-ui/react"

import { ProjectDetailCommentProps } from "./ProjectDetailComment"
import ProjectDetailCommentIcon from "./ProjectDetailCommentIcon"

const ProjectDetailCommentList = ({ comments }: ProjectDetailCommentProps) => {
  return (
    <Flex
      direction="column"
      gap="4rem">
      {comments.map((comment) => (
        <Flex
          justifyContent="space-between"
          key={comment.id}>
          <Flex
            gap="1rem"
            align="center">
            <Avatar
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
            />
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default ProjectDetailCommentList
