import { ChangeEvent, useCallback, useState } from "react"

import {
  Checkbox,
  Container,
  HStack,
  Select,
  Spacer,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react"
import { AllProject } from "api-models"

import { useAllProjectQuery } from "@pages/HomePage/hooks/queries/useAllProjectQuery"
import { SortSelectType } from "@pages/HomePage/types/type"

import MoreButton from "../MoreButton/MoreButton"
import ProjectList from "../ProjectList/ProjectList"

const ProjectListSection = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const [isReleased, setIsReleased] = useState(false)
  const [sortOption, setSortOption] = useState<SortSelectType>("createdAt")

  const lastProjectId = null
  const lastProject: AllProject | undefined = undefined

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
        <ProjectList
          projects={allProjectList}
          isLoading={isLoading}
        />
      </Stack>
      <MoreButton
        loadMore={loadMoreProjects}
        hasNext={hasNextPage}
      />
    </Container>
  )
}

export default ProjectListSection
