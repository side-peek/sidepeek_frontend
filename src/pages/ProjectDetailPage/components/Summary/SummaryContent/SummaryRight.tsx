import { useRef } from "react"

import { Box, Image, useMediaQuery } from "@chakra-ui/react"
import { MdArrowBackIosNew } from "@react-icons/all-files/md/MdArrowBackIosNew"
import { MdArrowForwardIos } from "@react-icons/all-files/md/MdArrowForwardIos"
import { ProjectOverViewUrl } from "api-models"
import "swiper/css"
import "swiper/css/pagination"
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules"
import { SwiperSlide } from "swiper/react"
import { Swiper as SwiperCore } from "swiper/types"

import noImage from "@assets/images/noImage.jpg"

import { StyledSwiper } from "../../../styles/SwiperSlide.styles"
import SwiperButton from "./SwiperButton"

interface SummaryRightProps {
  overviewImageUrl: ProjectOverViewUrl[]
}
const swiperParams = {
  pagination: {
    clickable: true,
  },
  autoHeight: true,
  modules: [Navigation, Pagination, Mousewheel, Keyboard],
}

const SummaryRight = ({ overviewImageUrl }: SummaryRightProps) => {
  const [isLargerThan1200] = useMediaQuery(["(min-width: 1200px)"])
  const [isLargerThan768] = useMediaQuery(["(min-width: 768px)"])

  const swiperRef = useRef<SwiperCore>()

  return (
    <Box
      maxW={isLargerThan1200 ? "40%" : isLargerThan768 ? "50%" : "30rem"}
      position="relative">
      {overviewImageUrl.length > 1 ? (
        <StyledSwiper
          {...swiperParams}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}>
          {overviewImageUrl?.map((overviewImg) => (
            <SwiperSlide key={overviewImg.id}>
              <Image
                loading="lazy"
                src={overviewImg.url}
                fallbackSrc={noImage}
                alt="overviewImg"
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      ) : (
        <Image
          src={noImage}
          loading="lazy"
          fallbackSrc={noImage}
          alt="defaultOverviewImg"
        />
      )}
      {isLargerThan768 && overviewImageUrl.length > 1 && (
        <>
          <SwiperButton
            direction="left"
            aria-label="leftIcon"
            onClick={() => swiperRef.current?.slidePrev()}
            icon={
              <MdArrowBackIosNew
                style={{ width: "2rem", height: "2rem", color: "#7a7a7a" }}
              />
            }
          />
          <SwiperButton
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
