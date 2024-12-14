import styled, { css } from "styled-components"

interface FormDivProps {
  flexDirection?: string
  marginLeft?: string
  gap?: string
}
interface ItemFieldProps {
  textDecoration?: string
  color?: string
  width?: string
}
interface CartItemInfoProps {
  flexDirection?: string
  width?: string
}
interface FinalSummaryBlockProps {
  color?: string
  fontWeight?: string
  fontSize?: string
}

export const ConfirmPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
export const ConfrimPageBlock = styled.div`
  width: 1250px;
  h1 {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 24px;
    font-weight: 600;
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
`
export const ConfirmContentBlock = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
`

export const ShipparyBlock = styled.div``
export const SummaryBlock = styled.div``
export const SummaryCartBlock = styled.div`
  width: 500px;
  margin-top: 25pxs;
`
export const SummaryCartItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SummaryCartItemField = styled.div<ItemFieldProps>`
  color: ${(props) => props.color || "black"};
  text-decoration: ${(props) => props.textDecoration || "none"};
  width: ${(props) => props.width || "auto"};
  margin-left: 10px;
`
export const SummaryCartItemInfo = styled.div<CartItemInfoProps>`
  font-size: 20px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  // eslint-disable-next-line prettier/prettier
  width: ${(props) => props.width || "auto"};

  img {
    height: 75px;
    width: 75px;
  }
`
export const FormBlock = styled.div`
  width: 550px;
`
export const FormDivStyled = styled.div<FormDivProps>`
  display: flex;
  justify-content: space-between;
  /* flex-direction: ${(props) => props.flexDirection || "row"};
  gap: ${(props) => props.gap || "none"}; */

  ${(props) => css`
    flex-direction: ${props.flexDirection || "row"};
    gap: ${props.gap || "none"};
  `}

  input {
    font-size: 16px;
    font-weight: 600;
    padding-left: 10px;
    border: 1px solid grey;
    margin-top: 15px;
  }
  input + input {
    margin-left: ${(props) => props.marginLeft || 0};
  }
`
export const FormBtnContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;

  button {
    width: 90%;
    background-color: black;
    color: white;
    height: 60px;
    font-size: 20px;
    border-radius: 10px;
    border: none;
  }
`

export const CouponBlock = styled.div`
  margin-top: 50px;
  display: flex;

  input {
    width: 100%;
    font-size: 18px;
    color: #808080d0;
    border: 1px solid #808080d0;
    padding-left: 10px;
    margin-right: 10px;
    font-weight: 600;
  }
  button {
    width: 175px;
    background-color: #808080d0;
    border: none;
    border-radius: 35px;
    font-size: 18px;
    color: white;
    font-weight: 600;
  }
`
export const FinalSummaryContainer = styled.div`
  margin-top: 50px;
`

export const FinalSummaryBlock = styled.div<FinalSummaryBlockProps>`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "black"};
`
