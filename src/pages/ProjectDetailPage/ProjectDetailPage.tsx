import { FaGithub, FaRegComment } from "react-icons/fa"
import { IoMdHeartEmpty } from "react-icons/io"
import { LiaEyeSolid } from "react-icons/lia"
import { PiClipboardText } from "react-icons/pi"
import { TbWorld } from "react-icons/tb"

import { Button, Image } from "@chakra-ui/react"
import { Box, Center, Flex, Icon, IconButton, Text } from "@chakra-ui/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import projectThumbnail from "@/assets/images/project.png"

import dog from "@assets/images/dog.jpeg"

import "./style.css"

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
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                w="80%"
                minHeight="20rem">
                <Text fontSize="xl">
                  Styled는 자신의 ootd를 공유하며 소통하고자하는 사람들의 니즈를
                  충족하고자 기획된, OOTD만을 위한 패션 특화 소셜 네트워크
                  서비스입니다.
                </Text>
                <Flex
                  gap="2rem"
                  pl="5rem">
                  <Button
                    borderRadius="2rem"
                    size="lg"
                    bgColor="blue.100"
                    color="white"
                    fontSize="xl"
                    p="2.2rem 1.5rem"
                    leftIcon={<TbWorld />}>
                    WEB
                  </Button>
                  <Button
                    p="2.2rem 1.5rem"
                    borderRadius="2rem"
                    colorScheme="blue"
                    size="lg"
                    leftIcon={<FaGithub />}>
                    Github
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Box maxW="40rem">
              <Swiper
                rewind={true}
                cssMode={true}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper">
                <SwiperSlide>
                  <Image
                    w="100%"
                    h="100%"
                    borderRadius="1rem"
                    src={projectThumbnail}
                    alt="project thumbnail"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    borderRadius="1rem"
                    src={dog}
                    alt="project thumbnail"
                  />
                </SwiperSlide>
              </Swiper>
            </Box>
          </Flex>
        </Center>
      </Flex>
    </Flex>
  )
}

export default ProjectDetailPage
