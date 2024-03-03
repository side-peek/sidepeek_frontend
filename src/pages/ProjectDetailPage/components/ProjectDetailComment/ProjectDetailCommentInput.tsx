import { Button, Flex } from "@chakra-ui/react"

import CommonInput from "@components/Input/CommonInput"

const ProjectDetailCommentInput = () => {
  return (
    <Flex
      w="100%"
      height="8rem">
      <CommonInput
        height="100%"
        inputWidth="100%"
        border="none"
        borderBottom="1px"
        borderColor="grey.400"
        fontSize="2rem"
        placeholder={"댓글을 입력하세요"}
      />
      <Button
        w="20%"
        height="100%"
        p="0"
        bgColor="blue.100"
        borderRadius="0"
        borderTopRightRadius="1rem"
        color="white"
        fontSize="xl"
        _hover={{ opacity: "0.5" }}>
        입력
      </Button>
    </Flex>
  )
}
export default ProjectDetailCommentInput
