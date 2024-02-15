import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"

interface ProjectCardProps {
  imgUrl: string
  viewCount: number
  heartCount: number
  isFullHeart: boolean
  title: string
  content: string
}

// 추후 아이콘 컴포넌트 추가시 넣을 예정
const ProjectCard = ({
  imgUrl,
  viewCount,
  heartCount,
  isFullHeart,
  title,
  content,
}: ProjectCardProps) => {
  return (
    <Box
      position="relative"
      width="100%"
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
        />
        <Box
          className="hover-overlay"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          opacity={0}
          backgroundColor="rgba(0, 0, 0, 0.5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          transition="opacity 0.3s">
          <Text
            color="white"
            fontSize="2rem">
            더보기
          </Text>
        </Box>
      </Box>

      <Stack
        mt="5"
        paddingLeft=".5rem"
        spacing="1">
        <Flex alignItems="center">
          <Heading size="md">{title}</Heading>
          <Text
            ml="auto"
            paddingRight={5}>
            {viewCount} {isFullHeart} {heartCount}
          </Text>
        </Flex>
        <Text
          width="95%"
          noOfLines={1}>
          {content}
        </Text>
      </Stack>
    </Box>
  )
}

export default ProjectCard
