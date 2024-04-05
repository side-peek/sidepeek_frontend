import { Link, useNavigate } from "react-router-dom"

import {
  AbsoluteCenter,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
  useTheme,
} from "@chakra-ui/react"
import { BannerProject } from "api-models"
import "swiper/css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { SwiperSlide } from "swiper/react"

import noImage from "@assets/images/noImage.webp"
import sidepeekBlue from "@assets/images/sidepeek_blue.png"

import { CustomSwiper } from "./Banner.style"

interface bannerListProps {
  bannerList: BannerProject[] | undefined
}

const Banner = ({ bannerList }: bannerListProps) => {
  const navigate = useNavigate()
  const theme = useTheme()
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

  return (
    <CustomSwiper
      theme={theme.colors}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      style={{ height: "35rem" }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}>
      {!bannerList?.length ? (
        <SwiperSlide
          style={{
            backgroundColor: `${theme.colors.blue[100]}`,
            color: "white",
          }}>
          <AbsoluteCenter>
            <Image
              width="100%"
              src={sidepeekBlue}
            />
            <Stack alignItems="center">
              <Text
                fontSize="xl"
                padding="1rem">
                사이드 프로젝트 공유는?
              </Text>
              <Heading>사이드픽에서!</Heading>
            </Stack>
          </AbsoluteCenter>
        </SwiperSlide>
      ) : (
        bannerList?.map((project) => (
          <SwiperSlide
            style={{
              backgroundColor: `${theme.colors.blue[100]}`,
              color: "white",
            }}
            key={project.id}>
            <HStack height="90%">
              <Image
                src={project.thumbnailUrl}
                fallbackSrc={noImage}
                alt="projectImg"
                height={isLargerThan768 ? "90%" : "50%"}
                marginTop="4rem"
                borderRadius="5rem"
                marginLeft={isLargerThan768 ? "13rem" : "2rem"}
                cursor="pointer"
                onClick={() => navigate(`/project/${project.id}`)}
              />
              <Spacer />
              <Stack
                marginRight={isLargerThan768 ? "13rem" : "2rem"}
                textAlign="right">
                <Link to={`/project/${project.id}`}>
                  <Text
                    fontSize="xl"
                    padding="1rem">
                    {project.subName}
                  </Text>
                  <Heading>{project.name}</Heading>
                </Link>
              </Stack>
            </HStack>
          </SwiperSlide>
        ))
      )}
    </CustomSwiper>
  )
}
export default Banner
