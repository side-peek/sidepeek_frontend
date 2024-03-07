import { ChangeEvent, useCallback, useState } from "react"
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

type SelectType = "createdAt" | "like" | "view"

const HomePage = () => {
  const [isDeploy, setIsDeploy] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SelectType>("createdAt")
  const limit = 24

  // 프로젝트 전체 목록 조회
  const {
    allProjectList,
    isAllProjectLoading,
    refetchAllProject,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAllProjectQuery(selectedOption, isDeploy, limit, "")

  const projectList = allProjectList

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SelectType
    setSelectedOption(value)

    refetchAllProject()
  }

  const loadMoreProjects = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      {isAllProjectLoading ? (
        <Skeleton height="35rem" />
      ) : (
        <Banner bannerList={allProjectList?.slice(0, 5)} />
      )}
      <Container maxW="80%">
        <Stack marginTop="15rem">
          <HStack spacing={5}>
            <Spacer />
            <Checkbox
              paddingRight="0.3rem"
              onChange={() => {
                setIsDeploy(!isDeploy)
                refetchAllProject()
              }}>
              출시 서비스만 보기
            </Checkbox>
            <Select
              width="10rem"
              variant="outline"
              marginRight="1rem"
              onChange={handleSelect}
              value={selectedOption}>
              <option value="createdAt">최신순</option>
              <option value="like">인기순</option>
              <option value="view">조회순</option>
            </Select>
          </HStack>
          <Grid
            mt="0.5rem"
            templateColumns="repeat(auto-fill, minmax(24rem, 1fr))"
            gap={0}>
            {projectList?.map((project) => (
              <GridItem key={project.id}>
                <Skeleton
                  width="95%"
                  borderRadius="1rem"
                  isLoaded={!isAllProjectLoading}>
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
                </Skeleton>
              </GridItem>
            ))}
          </Grid>
          <Center marginTop="2rem">
            <Button
              width="8rem"
              height="3rem"
              backgroundColor="blue.100"
              color="white"
              onClick={loadMoreProjects}>
              더보기
            </Button>
          </Center>
        </Stack>
        <Box height="15rem" />
      </Container>
    </>
  )
}

export default HomePage
