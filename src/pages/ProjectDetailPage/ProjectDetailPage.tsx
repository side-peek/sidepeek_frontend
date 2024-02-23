import { FaRegComment } from "react-icons/fa"
import { IoMdHeartEmpty } from "react-icons/io"
import { LiaEyeSolid } from "react-icons/lia"
import { PiClipboardText } from "react-icons/pi"

import { Image } from "@chakra-ui/react"
import { Box, Center, Flex, Icon, IconButton, Text } from "@chakra-ui/react"

const ProjectDetailPage = () => {
  return (
    <Flex
      maxW="128rem"
      bg="#f5f5f5"
      w="100%"
      h="53rem"
      gap="15rem"
      flexDirection="column"
      m="0 auto"
      p="2rem">
      <Flex flexDirection="column">
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
        <Center
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="5rem">
          <Box>
            <Text
              fontFamily="SCDream_Bold"
              fontSize="3xl"
              textAlign="center">
              스타일드
            </Text>
            <Text
              fontSize="2xl"
              textAlign="center">
              스타일 No.1
            </Text>
          </Box>
          <Flex
            justifyContent="center"
            w="90%">
            <Flex>
              <Box w="80%">
                <Text fontSize="xl">
                  Styled는 자신의 ootd를 공유하며 소통하고자하는 사람들의 니즈를
                  충족하고자 기획된, OOTD만을 위한 패션 특화 소셜 네트워크
                  서비스입니다.
                </Text>
              </Box>
            </Flex>
            <Box>
              <Image
                maxW="43rem"
                maxH="33rem"
                borderRadius="1rem"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
          </Flex>
        </Center>
      </Flex>
    </Flex>
  )
}

export default ProjectDetailPage
