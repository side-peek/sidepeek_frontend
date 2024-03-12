import { ChangeEvent, useCallback, useState } from "react"
import { Link } from "react-router-dom"

import {
  Box,
  Center,
  Checkbox,
  Container,
  Grid,
  HStack,
  Select,
  Skeleton,
  Spacer,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react"

import ProjectCard from "@components/ProjectCard/ProjectCard"

import Banner from "./components/Banner/Banner"
import MoreButton from "./components/MoreButton/MoreButton"
import useAllProjectQuery from "./hooks/queries/useAllProjectQuery"

type SelectType = "createdAt" | "like" | "view"

const HomePage = () => {
  const [isDeploy, setIsDeploy] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SelectType>("createdAt")
  const pageSize = 1
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const lastProjectId = null
  const lastProjectNum = null

  // 프로젝트 전체 목록 조회
  const {
    allProjectList,
    isAllProjectLoading,
    refetchAllProject,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAllProjectQuery(
    selectedOption,
    isDeploy,
    pageSize,
    lastProjectId,
    lastProjectNum,
  )

  const projectList = allProjectList != undefined ? allProjectList : []
  //const lastProject = projectList && projectList[projectList.length - 1]
  //lastProjectId = lastProject ? lastProject.id : null
  //console.log(allProjectList, isAllProjectLoading)

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SelectType
    setSelectedOption(value)
    /*if (selectedOption === "like") {
      lastProjectNum = lastProject && lastProject.likeCount
    } else if (selectedOption === "view") {
      lastProjectNum = lastProject && lastProject.viewCount
    } else {
      lastProjectNum = null
    }*/

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
        <Banner bannerList={projectList?.slice(0, 5)} />
      )}
      <Container maxW={isLargerThan1200 ? "80%" : "95%"}>
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
            {projectList &&
              allProjectList?.map((project) => (
                <Center key={project.id}>
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
                </Center>
              ))}
          </Grid>
        </Stack>
        {hasNextPage && (
          <MoreButton
            loadMore={loadMoreProjects}
            isMore={hasNextPage}
          />
        )}
      </Container>
      <Box height="15rem" />
    </>
  )
}

export default HomePage
