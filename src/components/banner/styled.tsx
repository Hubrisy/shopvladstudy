import styled from "styled-components"

interface FontSize {
  size?: "small" | "large"
}
interface ImgProps {
  margin?: string
  width?: string
  height?: string
  position?: string
  right?: string
  top?: string
  left?: string
  bottom?: string
}

export const BannerBlockStyled = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  max-width: 1250px;
  width: 100%;
  height: 512px;
  background-color: #c1dcdc;
  border-radius: 24px;
  display: flex;
`

export const BannerTextContent = styled.div`
  margin-top: 50px;
  margin-left: 50px;
`

export const BannerTitle = styled.div`
  font-size: 64px;
  width: 450px;
  font-weight: 800;
  line-height: 100%;
`

export const StatisticBlock = styled.div`
  margin-top: 25px;
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StatisticContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Statistic = styled.div<FontSize>`
  font-weight: 500;
  font-size: ${(props) => (props.size === "large" ? "32px" : "18px")};
`
export const VerticalLine = styled.div`
  height: 64px;
  width: 1px;
  background-color: #1e1e1e;
`
export const InputBlock = styled.div`
  margin-top: 50px;
  max-width: 450px;
  position: relative;
  z-index: 5;

  & > input {
    padding-left: 18px;
    font-size: 18px;
    color: rgba(30, 30, 30, 0.5);
    font-size: 16px;
    font-weight: 500;
  }
`
export const SearchImgBlock = styled.div`
  height: 50px;
  width: 50px;
  background-color: #c1dcdc;
  position: absolute;
  top: 7px;
  right: 8px;
  border-radius: 12px;
`
export const BannerImgBlock = styled.div`
  height: 100%;
  margin-left: 50px;
  display: flex;
  position: relative;
`

export const StyledImg = styled.img<ImgProps>`
  margin-top: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "50px"};
  position: ${(props) => props.position || "none"};
  top: ${(props) => props.top || "none"};
  right: ${(props) => props.right || "none"};
  bottom: ${(props) => props.bottom || "none"};
  left: ${(props) => props.left || "none"};
`
export const BannerImgContainer = styled.div`
  width: 100%;
`
