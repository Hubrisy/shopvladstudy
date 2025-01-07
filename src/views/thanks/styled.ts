import styled from "styled-components"

import Bckg from "../../images/data/plantbckg3.jpg"

interface ThanksItemBlockProps {
  display?: string
  fontSize?: string
  textDecoration?: string
  width?: string
}

export const ThanksPageContainer = styled.div`
  width: 100%;
  /* position: relative; */
  height: 97.7vh;
  background-image: url(${Bckg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ThanksPageBlock = styled.div`
  height: 500px;
  width: 800px;
  background-color: #c1dcdc;
  border-radius: 10px;
  font-size: 36px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  button {
    height: 50px;
    width: 200px;
    font-size: 20px;
    margin-top: 50px;
    border: none;
    border-radius: 10px;
    margin-bottom: 20px;
  }
`
export const ThanksCartContainer = styled.div`
  margin-top: 25px;
  width: 75%;
  display: flex;
  flex-direction: column;
  width: 550px;

  h4 {
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
  }
`
export const ThanksUserInfoBlock = styled.div`
  width: 100%;
`
export const ThanksCartOrderBlock = styled.div`
  display: flex;
`
export const ThanksItemBlock = styled.div<ThanksItemBlockProps>`
  /* display: flex;
  align-items: center; */
  display: ${(props) => props.display || "block"};
  flex-direction: column;
  align-items: center;
  margin-right: 100px;
  margin-top: 10px;
  margin-bottom: 20px;

  img {
    height: 100px;
    width: 100px;
    margin-top: 10px;
  }
`
export const ThanksItem = styled.div<ThanksItemBlockProps>`
  font-size: ${(props) => props.fontSize || "20px"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  width: ${(props) => props.width || "none"};
  margin-right: 10px;
  margin-top: 10px;
`
export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: black;
  margin-top: 10px;
`

export const ThanksFinalPrice = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: end;
  font-size: 26px;
`
export const ThanksOrderId = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
`
