import { ChangeEvent, useCallback, useState } from "react"

import { Container, Stack, useMediaQuery } from "@chakra-ui/react"

import { useQueryClient } from "@tanstack/react-query"

import ProjectFilter from "@components/ProjectFilter/ProjectFilter"
import ProjectList from "@components/ProjectList/ProjectList"

import { useAllProjectQuery } from "@pages/HomePage/hooks/queries/useAllProjectQuery"
import { SortSelectType } from "@pages/HomePage/types/type"

import { QUERYKEY } from "@constants/queryKey"

import MoreButton from "../MoreButton/MoreButton"

const ProjectListSection = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const [isReleased, setIsReleased] = useState(false)
  const [sortOption, setSortOption] = useState<SortSelectType>("createdAt")
  const queryClient = useQueryClient()

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

    if (value !== sortOption) {
      queryClient.removeQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
      queryClient.refetchQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
    }
    setSortOption(value)

    refetchAllProject()
  }

  const handleChange = () => {
    setIsReleased(!isReleased)
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
        <ProjectFilter
          sortOption={sortOption}
          handleChange={handleChange}
          handleSelect={handleSelect}
        />
        <ProjectList
          projects={allProjectList}
          isLoading={isLoading}
        />
      </Stack>
      <MoreButton
        isLoading={isFetchingNextPage}
        loadMore={loadMoreProjects}
        hasNext={hasNextPage}
      />
    </Container>
  )
}

export default ProjectListSection
