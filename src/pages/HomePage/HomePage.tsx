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
import { AllProject } from "api-models"

import ProjectCard from "@components/ProjectCard/ProjectCard"

import Banner from "./components/Banner/Banner"
import MoreButton from "./components/MoreButton/MoreButton"
import { useAllProjectQuery } from "./hooks/queries/useAllProjectQuery"
import { useBannerProjectQuery } from "./hooks/queries/useBannerProjectQuery"
import { SortSelectType } from "./types/type"

const HomePage = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const [isReleased, setIsReleased] = useState(false)
  const [sortOption, setSortOption] = useState<SortSelectType>("createdAt")

  const lastProjectId = null
  const lastProject: AllProject | undefined = undefined

  // 배너 프로젝트 조회
  const { bannerProjectList, isBannerLoading } = useBannerProjectQuery()

  // 프로젝트 전체 목록 조회
  const {
    allProjectList,
    isAllProjectLoading,
    refetchAllProject,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllProjectQuery({ sortOption, isReleased, lastProjectId, lastProject })

  const isLoading = isAllProjectLoading || isRefetching

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortSelectType
    setSortOption(value)

    refetchAllProject()
  }

  const loadMoreProjects = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return (
    <>
      {isBannerLoading ? (
        <Skeleton height="35rem" />
      ) : (
        <Banner bannerList={bannerProjectList} />
      )}
      <Container maxW={isLargerThan1200 ? "80%" : "95%"}>
        <Stack marginTop="15rem">
          <HStack spacing={5}>
            <Spacer />
            <Checkbox
              paddingRight="0.3rem"
              onChange={() => {
                setIsReleased(!isReleased)
                refetchAllProject()
              }}>
              출시 서비스만 보기
            </Checkbox>
            <Select
              width="10rem"
              variant="outline"
              marginRight="1rem"
              onChange={handleSelect}
              value={sortOption}>
              <option value="createdAt">최신순</option>
              <option value="like">인기순</option>
              <option value="view">조회순</option>
            </Select>
          </HStack>
          <Grid
            mt="0.5rem"
            templateColumns="repeat(auto-fill, minmax(24rem, 1fr))"
            gap={0}>
            {allProjectList !== undefined &&
              allProjectList.pages.map((projectList) => {
                return projectList.content.map((project) => (
                  <Center key={project.id}>
                    <Skeleton
                      width="95%"
                      borderRadius="1rem"
                      isLoaded={!isLoading}>
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
                ))
              })}
          </Grid>
        </Stack>
      </Container>
      {hasNextPage && (
        <MoreButton
          loadMore={loadMoreProjects}
          hasNext={hasNextPage}
        />
      )}
      <Box height="15rem" />
    </>
  )
}

export default HomePage
