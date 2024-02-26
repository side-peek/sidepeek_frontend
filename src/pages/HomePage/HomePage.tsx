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
  Spacer,
  Stack,
} from "@chakra-ui/react"

import { useQuery } from "@tanstack/react-query"

import ProjectCard from "@components/ProjectCard/ProjectCard"

import { getProjectList } from "./api/getProjectList"
import Banner from "./components/Banner/Banner"

export interface projectType {
  id: number
  name: string
  subName: string
  thumbnailUrl: string
  viewCount: number
  likeCount: number
  isLiked: boolean
  isDeploy: boolean
}

const HomePage = () => {
  const [isDeploy, setIsDeploy] = useState(false)
  const [isSelect, setIsSelect] = useState<
    "default" | "likeCount" | "viewCount"
  >("default")

  // 프로젝트 전체 목록 조회
  const { data } = useQuery({
    queryKey: ["project"],
    queryFn: async () => await getProjectList(),
  })

  const projectList = data?.projects.filter((project) =>
    isDeploy ? project.isDeploy : project,
  )

  const handleSort = (e: ChangeEvent) => {
    const value = (e.target as HTMLSelectElement).value as
      | "default"
      | "likeCount"
      | "viewCount"
    setIsSelect(value)
  }

  return (
    <>
      {/* 임시로 다섯개 잘라서 넣었습니다*/}
      <Banner
        bannerList={projectList === undefined ? [] : projectList.slice(0, 5)}
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
              onChange={handleSort}
              value={isSelect}>
              <option value="default">최신순</option>
              <option value="likeCount">인기순</option>
              <option value="viewCount">조회순</option>
            </Select>
          </HStack>
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={4}>
            {projectList === undefined
              ? "프로젝트가 없습니다"
              : projectList.map((project: projectType) => (
                  <GridItem key={project.id}>
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
                  </GridItem>
                ))}
          </Grid>
        </Stack>
        <Box height="20rem" />
      </Container>
      {/* 푸터 들어갈 자리 */}
    </>
  )
}

export default HomePage
