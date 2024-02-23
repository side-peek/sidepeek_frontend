import { Box, Image } from "@chakra-ui/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import projectThumbnail from "@/assets/images/project.png"

import dog from "@assets/images/dog.jpeg"

import "../../styles/index.css"

const ProjectDetailSummaryRight = () => {
  return (
    <Box maxW="40rem">
      <Swiper
        rewind={true}
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        <SwiperSlide>
          <Image
            borderRadius="1rem"
            src={projectThumbnail}
            alt="project thumbnail"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            borderRadius="1rem"
            src={dog}
            alt="project thumbnail"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default ProjectDetailSummaryRight
