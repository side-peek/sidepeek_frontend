import { ChangeEvent, useState } from "react"

import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  HStack,
  Select,
  Skeleton,
  Spacer,
  Stack,
} from "@chakra-ui/react"

import ProjectList from "@components/ProjectList/ProjectList"

import Banner from "./components/Banner/Banner"
import useAllProjectQuery from "./hooks/queries/useAllProjectQuery"

type SelectType = "default" | "likeCount" | "viewCount"

const HomePage = () => {
  const [isDeploy, setIsDeploy] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SelectType>("default")

  // 프로젝트 전체 목록 조회
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
      {/* 임시로 다섯개 잘라서 넣었습니다*/}
      {isAllProjectLoading ? (
        <Skeleton height="52rem" />
      ) : (
        <Banner bannerList={allProjectList?.projects.slice(0, 5)} />
      )}
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
          <Center marginTop="2rem">
            <Button
              width="8rem"
              height="3rem"
              backgroundColor="blue.100"
              color="white">
              더보기
            </Button>
          </Center>
        </Stack>
        <Box height="20rem" />
      </Container>
      {/* 푸터 들어갈 자리 */}
    </>
  )
}

export default HomePage
