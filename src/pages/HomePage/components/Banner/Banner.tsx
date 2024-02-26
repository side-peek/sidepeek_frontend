import { Link, useNavigate } from "react-router-dom"

import { HStack, Heading, Image, Spacer, Stack } from "@chakra-ui/react"
import { AllProject } from "api-models"
import "swiper/css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { SwiperSlide } from "swiper/react"

import { CustomSwiper } from "./Banner.style"

interface bannerListProps {
  bannerList: AllProject[]
}

const Banner = ({ bannerList }: bannerListProps) => {
  const navigate = useNavigate()
  return (
    <CustomSwiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      style={{ height: "52rem" }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}>
      {bannerList.map((project) => (
        <SwiperSlide
          style={{ backgroundColor: "#0C356A", color: "white" }}
          key={project.id}>
          <HStack height="90%">
            <Image
              src={project.thumbnailUrl}
              alt="projectImg"
              height="90%"
              marginTop="4rem"
              borderRadius="5rem"
              marginLeft="13rem"
              cursor="pointer"
              onClick={() => navigate(`/project/${project.id}`)}
            />
            <Spacer />
            <Stack
              marginRight="13rem"
              cursor="pointer"
              textAlign="right">
              <Link to={`/project/${project.id}`}>
                <Heading
                  size="md"
                  padding="1rem">
                  {project.subName}
                </Heading>
                <Heading>{project.name}</Heading>
              </Link>
            </Stack>
          </HStack>
        </SwiperSlide>
      ))}
    </CustomSwiper>
  )
}
export default Banner
