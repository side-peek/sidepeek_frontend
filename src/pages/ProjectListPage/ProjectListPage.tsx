import { Box } from "@chakra-ui/react"

import SearchBarSection from "./components/SearchBarSection/SearchBarSection"
import SearchListSection from "./components/SearchListSection/SearchListSection"

const ProjectListPage = () => {
  const params = new URLSearchParams(window.location.search)
  const search = params.get("search")

  return (
    <>
      <SearchBarSection search={search ? search : ""} />
      <SearchListSection search={search ? search : ""} />
      <Box height="15rem" />
    </>
  )
}

export default ProjectListPage
