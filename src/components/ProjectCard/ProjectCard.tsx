import { ForwardedRef, forwardRef } from "react"
import { useNavigate } from "react-router-dom"

import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { IoMdHeart } from "@react-icons/all-files/io/IoMdHeart"
import { IoMdHeartEmpty } from "@react-icons/all-files/io/IoMdHeartEmpty"
import { MdRemoveRedEye } from "@react-icons/all-files/md/MdRemoveRedEye"

import noImage from "@assets/images/noImage.jpg"

interface ProjectCardProps {
  imgUrl: string
  viewCount: number
  heartCount: number
  isFullHeart: boolean
  title: string
  content: string
  url: string
}

const ProjectCard = forwardRef(
  (
    {
      imgUrl,
      viewCount,
      heartCount,
      isFullHeart,
      title,
      content,
      url,
    }: ProjectCardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const navigate = useNavigate()

    return (
      <Box
        ref={ref}
        width="100%"
        onClick={() => navigate(url)}
        padding="1rem"
        cursor="pointer">
        <Box
          position="relative"
          overflow="hidden"
          _hover={{ "& > .hover-overlay": { opacity: 1 } }}
          borderRadius="1rem">
          <Image
            src={imgUrl}
            alt="projectImg"
            width="100%"
            height="27rem"
            objectFit="cover"
            fallbackSrc={noImage}
          />
          <Center
            className="hover-overlay"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            opacity={0}
            backgroundColor="rgba(0, 0, 0, 0.5)"
            transition="opacity 0.3s">
            <Text
              color="white"
              fontSize="2xl">
              더보기
            </Text>
          </Center>
        </Box>
        <Stack
          mt="4"
          paddingLeft="0.5rem"
          spacing="1">
          <Flex alignItems="center">
            <Heading size="md">{title}</Heading>
            <Flex
              ml="auto"
              gap="0.5rem">
              <Icon
                as={MdRemoveRedEye}
                w="1.3rem"
                h="1.3rem"
              />
              <Text>{viewCount}</Text>
              {isFullHeart ? (
                <Icon
                  as={IoMdHeart}
                  w="1.3rem"
                  h="1.3rem"
                />
              ) : (
                <Icon
                  as={IoMdHeartEmpty}
                  w="1.3rem"
                  h="1.3rem"
                />
              )}
              <Text>{heartCount}</Text>
            </Flex>
          </Flex>
          <Text
            width="95%"
            noOfLines={1}>
            {content}
          </Text>
        </Stack>
      </Box>
    )
  },
)

ProjectCard.displayName = "ProjectCard"

export default ProjectCard
