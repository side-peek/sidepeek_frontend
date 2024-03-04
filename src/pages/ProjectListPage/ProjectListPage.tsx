import { ChangeEvent, useState } from "react"
import { IoMdSearch } from "react-icons/io"

import {
  Box,
  Center,
  Checkbox,
  Container,
  HStack,
  Icon,
  Select,
  Spacer,
  Stack,
} from "@chakra-ui/react"

import CommonInput from "@components/Input/CommonInput"
import ProjectList from "@components/ProjectList/ProjectList"

import useAllProjectQuery from "@pages/HomePage/hooks/queries/useAllProjectQuery"

import ResultInfo from "./components/ResultInfo"

type SelectType = "default" | "likeCount" | "viewCount"

const ProjectListPage = () => {
  const params = new URLSearchParams(window.location.search)
  const search = params.get("search")

  const [isDeploy, setIsDeploy] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SelectType>("default")

  // 검색 결과 가져오기
  const { allProjectList, isAllProjectLoading } = useAllProjectQuery()

  const projectList = allProjectList?.projects.filter((project) =>
    isDeploy ? project.isDeploy : project,
  )

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SelectType
    setSelectedOption(value)
  }

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
            placeholder="검색어를 입력하세요"
            borderRadius="5rem"
            inputWidth="50rem"
            height="7rem"
            fontSize="2xl"
            onChange={() => console.log("change")}
            backgroundColor="white">
            <Icon
              cursor="pointer"
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

      <ResultInfo
        searchWord={search !== null ? search : ""}
        resultCount={projectList !== undefined ? projectList?.length : 0}
      />

      <Container maxW="80%">
        <Stack marginTop="15rem">
          <HStack spacing={5}>
            <Spacer />
            <Checkbox
              paddingRight="0.3rem"
              onChange={() => setIsDeploy(!isDeploy)}>
              출시 서비스만 보기
            </Checkbox>
            <Select
              width="10rem"
              variant="outline"
              marginRight="1rem"
              onChange={handleSelect}
              value={selectedOption}>
              <option value="default">최신순</option>
              <option value="likeCount">인기순</option>
              <option value="viewCount">조회순</option>
            </Select>
          </HStack>
          <ProjectList
            isLoading={isAllProjectLoading}
            projectList={projectList !== undefined ? projectList : []}
          />
        </Stack>
        <Box height="20rem" />
      </Container>
      {/* 푸터 들어갈 자리 */}
    </>
  )
}

export default ProjectListPage
