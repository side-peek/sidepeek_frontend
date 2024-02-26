import { IoMdSearch } from "react-icons/io"

import {
  Box,
  Center,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react"

import CommonInput from "@components/Input/CommonInput"

const ProjectListPage = () => {
  const params = new URLSearchParams(window.location.search)
  const search = params.get("search")

  // 검색 결과 가져오기

  return (
    <>
      <Box
        height="12rem"
        backgroundColor="blue.100">
        <Center
          position="absolute"
          left="50%"
          top="20rem"
          transform="translate(-50%,-50%)">
          <CommonInput
            type="search"
            placeholder="검색어를 입력하세요"
            borderRadius="5rem"
            inputWidth="50rem"
            height="7rem"
            fontSize="2xl"
            onChange={() => console.log("change")}
            backgroundColor="white">
            <Icon
              as={IoMdSearch}
              w="5rem"
              h="5rem"
              position="absolute"
              top="1rem"
              right="1rem"
            />
          </CommonInput>
        </Center>
      </Box>

      <Center marginTop="3rem">
        <Stack>
          <Heading>'{search}' 검색결과</Heading>
          <Text fontSize="2xl">{}개의 프로젝트를 발견하였습니다</Text>
        </Stack>
      </Center>
      <Container width="80%">
        <div>project list</div>
      </Container>
      {/* 푸터 들어갈 자리 */}
    </>
  )
}

export default ProjectListPage
