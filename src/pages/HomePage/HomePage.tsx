import { Box, Skeleton } from "@chakra-ui/react"

import Banner from "./components/Banner/Banner"
import ProjectListSection from "./components/ProjectListSection/ProjectListSection"
import { useBannerProjectQuery } from "./hooks/queries/useBannerProjectQuery"

const HomePage = () => {
  // 배너 프로젝트 조회
  const { bannerProjectList, isBannerLoading } = useBannerProjectQuery()

  return (
    <>
      {isBannerLoading ? (
        <Skeleton height="35rem" />
      ) : (
        <Banner bannerList={bannerProjectList} />
      )}
      <ProjectListSection isInfinityScroll={false} />
      <Box height="15rem" />
    </>
  )
}

export default HomePage
