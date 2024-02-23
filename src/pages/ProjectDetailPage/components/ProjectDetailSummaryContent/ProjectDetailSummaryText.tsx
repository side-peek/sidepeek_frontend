import { Flex, Text } from "@chakra-ui/react"

const ProjectDetailSummaryText = () => {
  return (
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
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ProjectDetailSummaryText
