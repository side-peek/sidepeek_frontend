import { Box } from "@chakra-ui/react"

import ProjectListSection from "@pages/HomePage/components/ProjectListSection/ProjectListSection"

import ResultInfo from "./components/ResultInfo"
import SearchSection from "./components/SearchSection"

const ProjectListPage = () => {
  const params = new URLSearchParams(window.location.search)
  const search = params.get("search")

  return (
    <>
      <SearchSection />
      <ResultInfo
        searchWord={search !== null ? search : ""}
        resultCount={0}
      />
      <ProjectListSection isInfinityScroll={true} />
      <Box height="15rem" />
    </>
  )
}

export default ProjectListPage
