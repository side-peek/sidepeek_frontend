import { Link, useNavigate } from "react-router-dom"

import { HStack, Heading, Image, Spacer, Stack } from "@chakra-ui/react"
import "swiper/css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import styled from "styled-components"

import { projectType } from "@pages/HomePage/HomePage"

interface bannerListProps {
  bannerList: projectType[]
}

const CustomBanner = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    opacity: 0;
    border-radius: 10rem;
    color: white;

    &:hover {
      opacity: 0.8;
      transition: 0.2s ease-out;
    }

    &:after {
      font-size: 2.2rem !important;
      font-weight: 600 !important;
    }
  }

  .swiper-pagination-bullet {
    background: yellow !important;
  }
`

const Banner = ({ bannerList }: bannerListProps) => {
  const navigate = useNavigate()
  return (
    <CustomBanner
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
    </CustomBanner>
  )
}
export default Banner
