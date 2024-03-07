import { Swiper } from "swiper/react"

import styled from "styled-components"

export const CustomSwiper = styled(Swiper)`
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
    background: ${({ theme }) => theme.yellow[100]} !important;
  }
`
