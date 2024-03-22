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
  const [skills, setSkills] = useState<string[]>([])
  const [lastProjectId, setLastProjectId] = useState<number | null>(null)
  const [lastOrderCount, setLastOrderCount] = useState<number | null>(null)

  const {
    pageData,
    isAllProjectLoading,
    refetchAllProject,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useAllProjectQuery({
    sortOption,
    isReleased,
    lastProjectId,
    lastOrderCount,
    skill: skills.join(","),
  })

  const isLoading = isAllProjectLoading || isRefetching
  const projectCount = pageData ? pageData.pages[0].totalElements : 0
  const lastProject = pageData && pageData.pages[0].content.at(-1)

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortSelectType

    if (value !== sortOption) {
      setLastOrderCount(null)
      setLastProjectId(null)

      setSortOption(value)
      queryClient.removeQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
      queryClient.refetchQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
    }
  }

  const handleChange = () => {
    setIsReleased(!isReleased)
    setLastOrderCount(null)
    setLastProjectId(null)

    refetchAllProject()
  }

  const loadMoreProjects = useCallback(() => {
    if (lastProject && hasNextPage && !isFetchingNextPage) {
      if (sortOption !== "createdAt") {
        sortOption === "like"
          ? setLastOrderCount(lastProject.likeCount)
          : setLastOrderCount(lastProject.viewCount)
      } else {
        setLastOrderCount(null)
      }

      setLastProjectId(lastProject.id)
      fetchNextPage()
    }
  }, [lastProject, hasNextPage, isFetchingNextPage, sortOption, fetchNextPage])

  const [selectedStacks, setSelectedStacks] = useState<Skill[]>([])

  const debounceTechFilter = useDebounce(() => {
    setSkills(selectedStacks.map((skill) => skill.name))
    setLastOrderCount(null)
    setLastProjectId(null)

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
          projects={pageData}
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
