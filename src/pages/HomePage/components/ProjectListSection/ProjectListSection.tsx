import { ChangeEvent, useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import {
  Checkbox,
  Container,
  HStack,
  Select,
  Spacer,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react"

import { useQueryClient } from "@tanstack/react-query"

import ProjectList from "@components/ProjectList/ProjectList"

import { useAllProjectQuery } from "@pages/HomePage/hooks/queries/useAllProjectQuery"
import { SortSelectType } from "@pages/HomePage/types/type"

import { QUERYKEY } from "@constants/queryKey"

import MoreButton from "../MoreButton/MoreButton"

interface ProjectListSectionProps {
  isInfinityScroll?: boolean
}

const ProjectListSection = ({
  isInfinityScroll = false,
}: ProjectListSectionProps) => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const [isReleased, setIsReleased] = useState(false)
  const [sortOption, setSortOption] = useState<SortSelectType>("createdAt")
  const queryClient = useQueryClient()

  // 프로젝트 전체 목록 조회
  const {
    allProjectList,
    isAllProjectLoading,
    refetchAllProject,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllProjectQuery({ sortOption, isReleased })

  const isLoading = isAllProjectLoading || isRefetching

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortSelectType

    // 다른 정렬 옵션 선택시 초기화 후 리패치
    if (value !== sortOption) {
      queryClient.removeQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
      queryClient.refetchQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
    }
    setSortOption(value)

    refetchAllProject()
  }

  const loadMoreProjects = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  const { ref, inView } = useInView({ threshold: 0 })

  useEffect(() => {
    if (isInfinityScroll && inView) {
      fetchNextPage()
    }
  })

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
          ref={isInfinityScroll ? ref : null}
        />
      </Stack>
      {!isInfinityScroll && (
        <MoreButton
          loadMore={loadMoreProjects}
          hasNext={hasNextPage}
        />
      )}
    </Container>
  )
}

export default ProjectListSection
