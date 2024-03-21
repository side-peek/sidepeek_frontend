import { ChangeEvent, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

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

import ResultInfo from "./components/ResultInfo/ResultInfo"
import SearchBarSection from "./components/SearchBarSection/SearchBarSection"

const ProjectListPage = () => {
  const params = useSearchParams()[0]
  const keyword = params.get("search")

  const [search, setSearch] = useState(keyword)
  const navigate = useNavigate()

  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")

  const [isReleased, setIsReleased] = useState(false)
  const [sortOption, setSortOption] = useState<SortSelectType>("createdAt")
  const queryClient = useQueryClient()
  const { ref, inView } = useInView({ threshold: 0 })
  const skills: string[] = []

  const {
    allProjectList,
    isAllProjectLoading,
    refetchAllProject,
    fetchNextPage,
    isRefetching,
    isFetchingNextPage,
  } = useAllProjectQuery({
    sortOption,
    isReleased,
    search,
    skills: skills.join(","),
  })

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

    if (isReleased) {
      refetchAllProject()
    } else {
      queryClient.removeQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
      queryClient.refetchQueries({ queryKey: [QUERYKEY.ALL_PROJECTS] })
    }
  }

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  })

  const handleSearch = (keyword: string) => {
    setSearch(keyword)
    navigate(`/project?search=${keyword}`)
  }

  const location = useLocation()

  useEffect(() => {
    refetchAllProject()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

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
    selectedStacks.forEach((skill) => skills.push(skill.name))
  }

  const onDeleteStack = (selectedSkill: Skill) => {
    setSelectedStacks((prev) =>
      prev.filter((skill) => skill.id !== selectedSkill.id),
    )
  }

  return (
    <>
      <SearchBarSection
        search={search ? search : ""}
        onSubmit={handleSearch}
      />
      <ResultInfo
        isLoading={isLoading}
        searchWord={search !== null ? search : ""}
        resultCount={allProjectList?.pages[0].totalElements || 0}
      />
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
            projects={allProjectList}
            isLoading={isLoading}
            isFetchingNextPage={isFetchingNextPage}
            projectCount={projectCount}
            ref={ref}
          />
        </Stack>
      </Container>
    </>
  )
}

export default ProjectListPage
