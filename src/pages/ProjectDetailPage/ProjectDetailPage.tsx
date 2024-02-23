import { FaRegComment } from "react-icons/fa"
import { IoMdHeartEmpty } from "react-icons/io"
import { LiaEyeSolid } from "react-icons/lia"
import { PiClipboardText } from "react-icons/pi"

import { Box, Container, Flex, IconButton, Text } from "@chakra-ui/react"

const ProjectDetailPage = () => {
  return (
    <Box
      maxW="128rem"
      bg="#f5f5f5"
      w="100%"
      h="53rem"
      m="0 auto"
      p="2rem">
      <Flex flexDirection="column">
        <Flex
          gap="1.5rem"
          justifyContent="flex-end">
          <Flex
            gap="0.7rem"
            alignItems="center">
            <IconButton
              fontSize="2.7rem"
              aria-label="views"
              icon={<LiaEyeSolid />}
            />
            <Text fontSize="xl">20</Text>
          </Flex>
          <Flex
            gap="0.7rem"
            alignItems="center"
            cursor="pointer">
            <IconButton
              fontSize="2.7rem"
              aria-label="good"
              icon={<IoMdHeartEmpty />}
            />
            <Text fontSize="xl">7</Text>
          </Flex>
          <Flex
            gap="0.7rem"
            alignItems="center"
            cursor="pointer">
            <IconButton
              fontSize="2.7rem"
              aria-label="good"
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
        <Container></Container>
      </Flex>
    </Box>
  )
}

export default ProjectDetailPage
