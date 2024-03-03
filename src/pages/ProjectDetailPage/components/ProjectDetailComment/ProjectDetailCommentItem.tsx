import { TiPencil } from "react-icons/ti"
import { VscChromeClose } from "react-icons/vsc"

import { Avatar, Flex, IconButton, Text } from "@chakra-ui/react"

const ProjectDetailCommentItem = () => {
  return (
    <Flex>
      <Avatar />
      <Flex>
        <Text>제목</Text>
        <Text>내용</Text>
      </Flex>
      <Flex>
        <IconButton
          aria-label="edit"
          icon={<TiPencil />}
        />
        <IconButton
          aria-label="delete"
          icon={<VscChromeClose />}
        />
      </Flex>
    </Flex>
  )
}

export default ProjectDetailCommentItem
