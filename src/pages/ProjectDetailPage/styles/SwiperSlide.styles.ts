import { Swiper } from "swiper/react"

import styled from "styled-components"

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-wrapper {
    height: 100% !important;
    aspect-ratio: 1/1;
  }
  .swiper-slide {
    height: 100%;
    aspect-ratio: 1/1;
  }
  .swiper-slide img {
    display: block;
    width: 100%; /* 부모 요소의 전체 너비 */
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: #ffc436;
  }
`
