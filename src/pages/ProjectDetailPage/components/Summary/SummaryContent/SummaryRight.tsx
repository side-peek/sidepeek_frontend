import { useRef } from "react"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md"

import { Box, Image, useMediaQuery } from "@chakra-ui/react"
import { ProjectOverViewUrl } from "api-models"
import "swiper/css"
import "swiper/css/pagination"
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"
import { SwiperSlide } from "swiper/react"
import { Swiper as SwiperCore } from "swiper/types"

import noImage from "@assets/images/noImage.jpg"

import { StyledSwiper } from "../../../styles/SwiperSlide.styles"
import SummaryRightIcon from "./SummaryRightIcon"

interface SummaryRightProps {
  overviewImageUrl: ProjectOverViewUrl[]
}
const swiperParams = {
  loop: true,
  pagination: {
    clickable: true,
  },
  modules: [Navigation, Pagination, Mousewheel, Keyboard],
}

const SummaryRight = ({ overviewImageUrl }: SummaryRightProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

  const swiperRef = useRef<SwiperCore>()

  return (
    <Box
      maxW={isLargerThan1200 ? "50%" : isLargerThan768 ? "75rem" : "100%"}
      position="relative">
      {overviewImageUrl.length > 1 ? (
        <StyledSwiper
          {...swiperParams}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}>
          {overviewImageUrl?.map((overviewImg) => (
            <SwiperSlide key={overviewImg.id}>
              <Image
                objectFit="cover"
                src={overviewImg.url}
                fallbackSrc={noImage}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      ) : (
        <Image
          objectFit="cover"
          src={noImage}
          fallbackSrc={noImage}
        />
      )}
      {isLargerThan1200 && overviewImageUrl.length > 1 && (
        <>
          <SummaryRightIcon
            direction="left"
            aria-label="leftIcon"
            onClick={() => swiperRef.current?.slidePrev()}
            icon={
              <MdArrowBackIosNew
                style={{ width: "2rem", height: "2rem", color: "#7a7a7a" }}
              />
            }
          />
          <SummaryRightIcon
            direction="right"
            aria-label="rightIcon"
            onClick={() => swiperRef.current?.slideNext()}
            icon={
              <MdArrowForwardIos
                style={{ width: "2rem", height: "2rem", color: "#7a7a7a" }}
              />
            }
          />
        </>
      )}
    </Box>
  )
}
export default SummaryRight
