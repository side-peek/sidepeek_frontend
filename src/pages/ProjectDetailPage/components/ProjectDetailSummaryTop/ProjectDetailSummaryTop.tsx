import { FaRegComment } from "react-icons/fa"
import { IoMdHeartEmpty } from "react-icons/io"
import { LiaEyeSolid } from "react-icons/lia"
import { PiClipboardText } from "react-icons/pi"

import { Flex, Icon, IconButton, Text } from "@chakra-ui/react"

const ProjectDetailSummaryTop = () => {
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
        <Text fontSize="xl">20</Text>
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
        <Text fontSize="xl">7</Text>
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
        <Text fontSize="xl">2</Text>
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
