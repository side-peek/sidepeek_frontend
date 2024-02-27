import { Swiper } from "swiper/react"

import styled from "styled-components"

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }
`

export const NextButton = styled.button``
