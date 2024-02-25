import { useRef } from "react"
import { MdArrowBackIosNew } from "react-icons/md"
import { MdArrowForwardIos } from "react-icons/md"

import { Box, Icon, IconButton, Image } from "@chakra-ui/react"
import { ProjectOverViewUrl } from "api-models"
import "swiper/css"
import "swiper/css/pagination"
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"
import { SwiperSlide } from "swiper/react"
import { Swiper as SwiperCore } from "swiper/types"

import { StyledSwiper } from "../../styles/SwiperSlide.styles"

interface ProjectDetailSummaryRightProps {
  overviewImageUrl: ProjectOverViewUrl[]
}

const swiperParams = {
  loop: true,
  pagination: {
    clickable: true,
  },
  modules: [Navigation, Pagination, Mousewheel, Keyboard],
}

const ProjectDetailSummaryRight = ({
  overviewImageUrl,
}: ProjectDetailSummaryRightProps) => {
  const swiperRef = useRef<SwiperCore>()

  return (
    <Box
      maxW="43rem"
      maxH="33rem"
      position="relative">
      <StyledSwiper
        {...swiperParams}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}>
        {overviewImageUrl.map((overviewImg) => (
          <SwiperSlide key={overviewImg.id}>
            <Image
              borderRadius="1rem"
              src={overviewImg.url}
              alt="project thumbnail"
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <IconButton
        aria-label="notification popover"
        position="absolute"
        top="44%"
        left="-6%"
        bgColor="#d9d9d9"
        height="5rem"
        width="5rem"
        borderRadius="50%"
        zIndex="5"
        onClick={() => swiperRef.current?.slidePrev()}
        icon={
          <Icon
            as={MdArrowBackIosNew}
            w="3rem"
            h="3rem"
            color="#7a7a7a"
          />
        }
      />

      <IconButton
        aria-label="notification popover"
        position="absolute"
        top="44%"
        right="-6%"
        bgColor="#d9d9d9"
        height="5rem"
        width="5rem"
        borderRadius="50%"
        zIndex="5"
        onClick={() => swiperRef.current?.slideNext()}
        icon={
          <Icon
            as={MdArrowForwardIos}
            w="3rem"
            h="3rem"
            color="#7a7a7a"
          />
        }
      />
    </Box>
  )
}

export default ProjectDetailSummaryRight
