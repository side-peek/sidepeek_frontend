import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

import {
  Box,
  Checkbox,
  Container,
  Grid,
  GridItem,
  HStack,
  Select,
  Skeleton,
  Spacer,
  Stack,
} from "@chakra-ui/react"

import ProjectCard from "@components/ProjectCard/ProjectCard"

import useAllProjectQuery from "@pages/HomePage/hooks/queries/useAllProjectQuery"

import ResultInfo from "./components/ResultInfo"
import SearchSection from "./components/SearchSection"

type SelectType = "createdAt" | "like" | "view"

const ProjectListPage = () => {
  const params = new URLSearchParams(window.location.search)
  const search = params.get("search")

  const [isDeploy, setIsDeploy] = useState(false)

  const [selectedOption, setSelectedOption] = useState<SelectType>("createdAt")

  // 검색 결과 가져오기 (일단 임시)
  const { allProjectList, isAllProjectLoading } = useAllProjectQuery()
  const projectList = allProjectList?.projects

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SelectType
    setSelectedOption(value)
  }

  return (
    <>
      <SearchSection />
      <ResultInfo
        searchWord={search !== null ? search : ""}
        resultCount={projectList !== undefined ? projectList?.length : 0}
      />
      <Container maxW="80%">
        <Stack marginTop="15rem">
          <HStack spacing={5}>
            <Spacer />
            <Checkbox
              paddingRight="0.3rem"
              onChange={() => setIsDeploy(!isDeploy)}>
              출시 서비스만 보기
            </Checkbox>
            <Select
              width="10rem"
              variant="outline"
              marginRight="1rem"
              onChange={handleSelect}
              value={selectedOption}>
              <option value="createdAt">최신순</option>
              <option value="like">인기순</option>
              <option value="view">조회순</option>
            </Select>
          </HStack>
          <Grid
            mt="0.5rem"
            templateColumns="repeat(auto-fill, minmax(24rem, 1fr))"
            gap={0}>
            {projectList?.map((project) => (
              <GridItem key={project.id}>
                <Skeleton
                  width="95%"
                  borderRadius="1rem"
                  isLoaded={!isAllProjectLoading}>
                  <Link to={`/project/${project.id}`}>
                    <ProjectCard
                      imgUrl={project.thumbnailUrl}
                      viewCount={project.viewCount}
                      heartCount={project.likeCount}
                      isFullHeart={project.isLiked}
                      title={project.name}
                      content={project.subName}
                    />
                  </Link>
                </Skeleton>
              </GridItem>
            ))}
          </Grid>
        </Stack>
        <Box height="20rem" />
      </Container>
    </>
  )
}

export default ProjectListPage
