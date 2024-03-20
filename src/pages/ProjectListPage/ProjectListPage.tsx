import { ChangeEvent, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

import { Container, Stack, useMediaQuery } from "@chakra-ui/react"

import { useQueryClient } from "@tanstack/react-query"

import ProjectFilter from "@components/ProjectFilter/ProjectFilter"
import ProjectList from "@components/ProjectList/ProjectList"

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

  const {
    allProjectList,
    isAllProjectLoading,
    refetchAllProject,
    fetchNextPage,
    isRefetching,
    isFetchingNextPage,
  } = useAllProjectQuery({ sortOption, isReleased, search })

  const isLoading = isAllProjectLoading || isRefetching

  const projectCount =
    allProjectList != undefined && allProjectList.pages[0].totalElements

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
        <Stack marginTop="15rem">
          {projectCount ? (
            <ProjectFilter
              sortOption={sortOption}
              handleChange={handleChange}
              handleSelect={handleSelect}
            />
          ) : null}
          <ProjectList
            projects={allProjectList}
            isLoading={isLoading}
            isFetchingNextPage={isFetchingNextPage}
            ref={ref}
          />
        </Stack>
      </Container>
    </>
  )
}

export default ProjectListPage
