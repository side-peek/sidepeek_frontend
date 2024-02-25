import { FaRegComment } from "react-icons/fa"
import { IoMdHeartEmpty } from "react-icons/io"
import { LiaEyeSolid } from "react-icons/lia"
import { PiClipboardText } from "react-icons/pi"

import { Flex, Icon, IconButton, Text } from "@chakra-ui/react"

interface ProjectDetailSummaryTopProps {
  likeCount: number
  viewCount: number
  commentCount: number
}

const ProjectDetailSummaryTop = ({
  likeCount,
  viewCount,
  commentCount,
}: ProjectDetailSummaryTopProps) => {
  return (
    <Flex
      gap="1.5rem"
      justifyContent="flex-end">
      <Flex
        gap="0.7rem"
        alignItems="center">
        <Icon
          fontSize="2.7rem"
          as={LiaEyeSolid}
        />
        <Text fontSize="xl">{viewCount}</Text>
      </Flex>
      <Flex
        gap="0.7rem"
        alignItems="center"
        cursor="pointer"
        _hover={{ opacity: "0.5" }}>
        <IconButton
          background="none"
          fontSize="2.7rem"
          aria-label="good"
          _hover={{ background: "none" }}
          icon={<IoMdHeartEmpty />}
        />
        <Text fontSize="xl">{likeCount}</Text>
      </Flex>
      <Flex
        gap="0.7rem"
        alignItems="center"
        _hover={{ opacity: "0.5" }}
        cursor="pointer">
        <IconButton
          fontSize="2.7rem"
          aria-label="good"
          background="none"
          _hover={{ background: "none" }}
          icon={<FaRegComment />}
        />
        <Text fontSize="xl">{commentCount}</Text>
      </Flex>

      <IconButton
        fontSize="2.7rem"
        aria-label="good"
        icon={<PiClipboardText />}
      />
    </Flex>
  )
}

export default ProjectDetailSummaryTop
