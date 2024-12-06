import React from "react"

import ArrowRight from "../../images/search_block/arrow1.png"
import ArrowLeft from "../../images/search_block/arrow2.png"
import BlackBG from "../../images/search_block/circlebg.png"
import Plant from "../../images/search_block/plant.png"
import Search from "../../images/search_block/search.png"
import { Input } from "../input"
import {
  BannerBlockStyled,
  BannerImgBlock,
  BannerTextContent,
  BannerTitle,
  InputBlock,
  SearchImgBlock,
  Statistic,
  StatisticBlock,
  StatisticContainer,
  StyledImg,
  VerticalLine,
} from "./styled"

export const Banner = () => {
  return (
    <BannerBlockStyled>
      <BannerTextContent>
        <BannerTitle>Buy your dream plants</BannerTitle>
        <StatisticBlock>
          <StatisticContainer>
            <Statistic size="large">50+</Statistic>
            <Statistic>Plant Species</Statistic>
          </StatisticContainer>
          <VerticalLine />
          <StatisticContainer>
            <Statistic size="large">100+</Statistic>
            <Statistic>Customers</Statistic>
          </StatisticContainer>
        </StatisticBlock>
        <InputBlock>
          <Input placeholder="What are you looking for?" />
          <SearchImgBlock>
            <StyledImg src={Search} alt="Search" />
          </SearchImgBlock>
        </InputBlock>
      </BannerTextContent>
      <BannerImgBlock>
        <StyledImg
          height="90px"
          width="180px"
          margin="330px"
          src={ArrowLeft}
          alt="arrow"
        />
        <BannerImgBlock>
          <StyledImg
            src={BlackBG}
            width="400px"
            height="350px"
            margin="162px"
          />
          <StyledImg
            src={Plant}
            width="340px"
            height="450px"
            position="absolute"
            top="62px"
            left="60px"
          />
        </BannerImgBlock>
        <StyledImg
          src={ArrowRight}
          width="80px"
          height="150px"
          position="absolute"
          right="-30px"
          top="15px"
        />
      </BannerImgBlock>
    </BannerBlockStyled>
  )
}
