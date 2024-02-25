import { Swiper } from "swiper/react"

import styled from "styled-components"

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  .swiper-slide {
    background-color: "#d4d4d4";
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const NextButton = styled.button``
