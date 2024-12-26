import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import type { ReactNode } from "react"
import React from "react"
import Slider from "react-slick"

import { SliderContainer } from "./styled"

interface SliderProps {
  children: ReactNode
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const SliderComponent: React.FC<SliderProps> = ({ children }) => {
  return (
    <SliderContainer>
      <Slider {...settings}>{children}</Slider>
    </SliderContainer>
  )
}
