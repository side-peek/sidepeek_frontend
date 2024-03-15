import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Grid,
  GridItem,
  HStack,
  Select,
  Skeleton,
  Spacer,
  Stack,
} from "@chakra-ui/react"

import ProjectCard from "@components/ProjectCard/ProjectCard"

import Banner from "./components/Banner/Banner"
import useAllProjectQuery from "./hooks/queries/useAllProjectQuery"

type SelectType = "default" | "likeCount" | "viewCount"

const HomePage = () => {
  const [isDeploy, setIsDeploy] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SelectType>("default")

  // 프로젝트 전체 목록 조회
  const { allProjectList, isAllProjectLoading } = useAllProjectQuery()
  console.log(allProjectList)

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
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={4}>
            {isAllProjectLoading ? (
              <>
                <Skeleton
                  height="20rem"
                  borderRadius="1rem"
                />
                <Skeleton
                  height="20rem"
                  borderRadius="1rem"
                />
                <Skeleton
                  height="20rem"
                  borderRadius="1rem"
                />
                <Skeleton
                  height="20rem"
                  borderRadius="1rem"
                />
              </>
            ) : (
              projectList?.map((project) => (
                <GridItem key={project.id}>
                  <Link to={`/project/${project.id}`}>
                    <ProjectCard
                      imgUrl={project.thumbnailUrl}
                      viewCount={project.viewCount}
                      heartCount={project.likeCount}
                      isFullHeart={project.isLiked}
                      title={project.name}
                      content={project.subName}
                    />
                  </Link>
                </GridItem>
              ))
            )}
          </Grid>
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
