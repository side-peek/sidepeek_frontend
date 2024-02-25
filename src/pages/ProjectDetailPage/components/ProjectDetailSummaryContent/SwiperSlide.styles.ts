import { Swiper } from "swiper/react"

import styled from "styled-components"

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: #d9d9d9;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    color: #7a7a7a !important;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 2.5rem !important;
    font-weight: 900 !important;
  }
`
