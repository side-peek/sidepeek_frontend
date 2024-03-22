import { ChangeEvent, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

import { Container, Stack, useMediaQuery } from "@chakra-ui/react"
import { Skill } from "api-models"

import ProjectFilter from "@components/ProjectFilter/ProjectFilter"
import ProjectList from "@components/ProjectList/ProjectList"
import TechStackFilter from "@components/TechStackFilter/TechStackFilter"

import { useDebounce } from "@hooks/useDebounce"

import { useAllProjectQuery } from "@pages/HomePage/hooks/queries/useAllProjectQuery"
import { SortSelectType } from "@pages/HomePage/types/type"

import ResultInfo from "./components/ResultInfo/ResultInfo"
import SearchBarSection from "./components/SearchBarSection/SearchBarSection"

const ProjectListPage = () => {
  const params = useSearchParams()[0]
  const keyword = params.get("search")

  const [search, setSearch] = useState(keyword)
  const navigate = useNavigate()

  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")

  const { ref, inView } = useInView({ threshold: 0 })
  const [skills, setSkills] = useState<string[]>([])

  const [isReleased, setIsReleased] = useState(false)
  const [sortOption, setSortOption] = useState<SortSelectType>("createdAt")
  const [pageInfo, setPageInfo] = useState<{
    lastProjectId: number | null
    lastOrderCount: number | null
  }>({ lastProjectId: null, lastOrderCount: null })

  const {
    pageData,
    isAllProjectLoading,
    refetchAllProject,
    fetchNextPage,
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
    setSkills(selectedStacks.map((skill) => skill.name))

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
    <>
      <SearchBarSection
        search={search ? search : ""}
        onSubmit={handleSearch}
      />
      <ResultInfo
        isLoading={isLoading}
        searchWord={search !== null ? search : ""}
        resultCount={pageData?.pages[0].totalElements || 0}
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
            projects={pageData}
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
