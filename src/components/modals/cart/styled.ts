import styled from "styled-components"

interface AmountFieldProps {
  cursor?: string
}
interface ICartImg {
  height?: string
  width?: string
}

export const CartBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.723);
  position: fixed;
  z-index: 20;
  top: 0;
  overflow: auto;
`

export const CartContainerStyled = styled.div`
  width: 700px;
  height: 450px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
`
export const CartItemContainer = styled.div`
  width: 500px;
  margin: 10px auto 10px;
`
export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
export const CartField = styled.div`
  font-size: 18px;
`
export const CartItemImg = styled.img<ICartImg>`
  height: ${(props) => props.height || "50px"};
  width: ${(props) => props.width || "50px"};
`
export const ItemAmountContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
`

export const ItemAmountField = styled.div<AmountFieldProps>`
  font-size: 22px;
  cursor: ${(props) => props.cursor || "auto"};
`
export const ItemRemoveBlock = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
`
export const CartItemPriceBlck = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:first-child {
    font-size: 24px;
    font-weight: 600;
  }
  > div:nth-child(2) {
    text-decoration: line-through;
    font-size: 18px;
    color: grey;
  }
`
export const SummaryPriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 20px;
  font-weight: 600;
  margin-top: 15px;

  span {
    font-size: 18px;
    font-weight: 400;
  }
`
export const ConfirmBtnBlck = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;

  button {
    height: 50px;
    width: 150px;
    font-size: 20px;
    border-radius: 10px;
    background-color: #c1dcdc;
    border: none;
  }
`
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c1dcdc;
`
