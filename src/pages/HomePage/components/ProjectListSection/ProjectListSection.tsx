import { ChangeEvent, useCallback, useEffect, useState } from "react"

import { Container, Stack, useMediaQuery } from "@chakra-ui/react"
import { Skill } from "api-models"

import { useQueryClient } from "@tanstack/react-query"

import ProjectFilter from "@components/ProjectFilter/ProjectFilter"
import ProjectList from "@components/ProjectList/ProjectList"
import TechStackFilter from "@components/TechStackFilter/TechStackFilter"

import { useDebounce } from "@hooks/useDebounce"

import { useAllProjectQuery } from "@pages/HomePage/hooks/queries/useAllProjectQuery"
import { SortSelectType } from "@pages/HomePage/types/type"

import { QUERYKEY } from "@constants/queryKey"

import MoreButton from "../MoreButton/MoreButton"

const ProjectListSection = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const [isReleased, setIsReleased] = useState(false)
  const [sortOption, setSortOption] = useState<SortSelectType>("createdAt")
  const queryClient = useQueryClient()
  const skills: string[] = []

  const {
    allProjectList,
    isAllProjectLoading,
    refetchAllProject,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllProjectQuery({ sortOption, isReleased, skills })

  const isLoading = isAllProjectLoading || isRefetching
  const projectCount = allProjectList
    ? allProjectList.pages[0].totalElements
    : 0

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortSelectType

    if (value !== sortOption) {
      setSortOption(value)
      queryClient.removeQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
      queryClient.refetchQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
    }
  }

  const handleChange = () => {
    setIsReleased(!isReleased)

    queryClient.removeQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
    queryClient.refetchQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
  }

  const loadMoreProjects = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  const [selectedStacks, setSelectedStacks] = useState<Skill[]>([])

  const debounceTechFilter = useDebounce(() => {
    selectedStacks.forEach((skill) => skills.push(skill.name))

    refetchAllProject()
  }, 500)

  useEffect(() => {
    debounceTechFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStacks])

  const onAppendStack = (selectedSkill: Skill) => {
    setSelectedStacks((prev) => [...prev, selectedSkill])
  }

  const onDeleteStack = (selectedSkill: Skill) => {
    setSelectedStacks((prev) =>
      prev.filter((skill) => skill.id !== selectedSkill.id),
    )
  }

  return (
    <Container maxW={isLargerThan1200 ? "80%" : "95%"}>
      <Stack>
        <TechStackFilter
          selectedStacks={selectedStacks}
          onAppendStack={onAppendStack}
          onDeleteStack={onDeleteStack}
        />
        <ProjectFilter
          projectCount={projectCount}
          isReleased={isReleased}
          sortOption={sortOption}
          handleChange={handleChange}
          handleSelect={handleSelect}
        />
        <ProjectList
          projectCount={projectCount}
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
