import { TiPencil } from "react-icons/ti"
import { VscChromeClose } from "react-icons/vsc"

import { Avatar, Flex, IconButton, Text } from "@chakra-ui/react"

import { ProjectDetailCommentProps } from "./ProjectDetailComment"

const ProjectDetailCommentList = ({ comments }: ProjectDetailCommentProps) => {
  return (
    <Flex
      direction="column"
      gap="3rem">
      {comments.map((comment) => (
        <Flex
          justifyContent="space-between"
          key={comment.id}>
          <Flex
            gap="1rem"
            align="center">
            <Avatar src={comment.owner.profileImageUrl} />
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
            gap="0.5rem"
            align="center">
            <IconButton
              aria-label="edit"
              icon={<TiPencil />}
              fontSize="2rem"
              background="none"
              _hover={{ background: "none" }}
            />
            <IconButton
              aria-label="delete"
              icon={<VscChromeClose />}
              background="none"
              fontSize="2rem"
              _hover={{ background: "none" }}
            />
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default ProjectDetailCommentList
