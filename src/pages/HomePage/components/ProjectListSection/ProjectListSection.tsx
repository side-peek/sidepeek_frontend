import { ChangeEvent, useCallback, useEffect, useState } from "react"

import { Container, Stack, useMediaQuery } from "@chakra-ui/react"
import { Skill } from "api-models"

import ProjectFilter from "@components/ProjectFilter/ProjectFilter"
import ProjectList from "@components/ProjectList/ProjectList"
import TechStackFilter from "@components/TechStackFilter/TechStackFilter"

import { useDebounce } from "@hooks/useDebounce"

import { useAllProjectQuery } from "@pages/HomePage/hooks/queries/useAllProjectQuery"
import { SortSelectType } from "@pages/HomePage/types/type"

import MoreButton from "../MoreButton/MoreButton"

const ProjectListSection = () => {
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const [isReleased, setIsReleased] = useState(false)
  const [sortOption, setSortOption] = useState<SortSelectType>("createdAt")
  const [skills, setSkills] = useState<string[]>([])
  const [pageInfo, setPageInfo] = useState<{
    lastProjectId: number | null
    lastOrderCount: number | null
  }>({ lastProjectId: null, lastOrderCount: null })

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
    lastProjectId: pageInfo.lastProjectId,
    lastOrderCount: pageInfo.lastOrderCount,
    skill: skills.join(","),
  })

  const isLoading = isAllProjectLoading || isRefetching
  const projectCount = pageData ? pageData.pages[0].totalElements : 0
  const lastProject = pageData && pageData.pages[0].content.at(-1)

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortSelectType
    if (value !== sortOption) {
      setPageInfo({ lastOrderCount: null, lastProjectId: null })

      setSortOption(value)

      refetchAllProject()
    }
  }

  const handleChange = () => {
    setIsReleased(!isReleased)
    setPageInfo({ lastOrderCount: null, lastProjectId: null })

    refetchAllProject()
  }

  const loadMoreProjects = useCallback(() => {
    if (isFetchingNextPage) {
      return
    }

    if (lastProject && hasNextPage) {
      setPageInfo(() => {
        if (sortOption === "createdAt") {
          return { lastProjectId: lastProject.id, lastOrderCount: null }
        } else {
          console.log(sortOption, lastProject.id)
          return {
            lastProjectId: lastProject.id,
            lastOrderCount:
              sortOption === "like"
                ? lastProject.likeCount
                : lastProject.viewCount,
          }
        }
      })

      fetchNextPage()
    }
  }, [lastProject, hasNextPage, isFetchingNextPage, fetchNextPage, sortOption])

  const [selectedStacks, setSelectedStacks] = useState<Skill[]>([])

  const debounceTechFilter = useDebounce(() => {
    setSkills(selectedStacks.map((skill) => skill.name))
    setPageInfo({ lastOrderCount: null, lastProjectId: null })

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
