import { Box, Image } from "@chakra-ui/react"
import { ProjectOverViewUrl } from "api-models"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "../../styles/index.css"

interface ProjectDetailSummaryRightProps {
  overviewImageUrl: ProjectOverViewUrl[]
}

const swiperParams = {
  navigation: true,
  loop: true,
  pagination: {
    clickable: true,
  },

  modules: [Navigation, Pagination, Mousewheel, Keyboard],
}

const ProjectDetailSummaryRight = ({
  overviewImageUrl,
}: ProjectDetailSummaryRightProps) => {
  return (
    <Box
      maxW="43rem"
      maxH="33rem">
      <Swiper {...swiperParams}>
        {overviewImageUrl.map((overviewImg) => (
          <SwiperSlide key={overviewImg.id}>
            <Image
              borderRadius="1rem"
              src={overviewImg.url}
              alt="project thumbnail"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default ProjectDetailSummaryRight
