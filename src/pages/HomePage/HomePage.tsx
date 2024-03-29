import { Fade, Skeleton } from "@chakra-ui/react"

import Banner from "./components/Banner/Banner"
import ProjectListSection from "./components/ProjectListSection/ProjectListSection"
import { useBannerProjectQuery } from "./hooks/queries/useBannerProjectQuery"

const HomePage = () => {
  const { bannerProjectList, isBannerLoading } = useBannerProjectQuery()

  return (
    <Fade in={true}>
      {isBannerLoading ? (
        <Skeleton height="35rem" />
      ) : (
        <Banner bannerList={bannerProjectList} />
      )}
      <ProjectListSection />
    </Fade>
  )
}

export default HomePage
