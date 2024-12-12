/* eslint-disable no-nested-ternary */
import React from "react"
import { Link } from "react-router-dom"

import { useCartContext } from "../../../context/cart"
import { useModalContext } from "../../../context/modal"
import { useCart } from "../../../hooks/useCart"
import { useOrderSummary } from "../../../hooks/useOrderSummary"
import CloseIcon from "../../../images/icons/close.png"
import {
  CartBlock,
  CartContainerStyled,
  CartField,
  CartItem,
  CartItemContainer,
  CartItemImg,
  CartItemPriceBlck,
  ConfirmBtnBlck,
  ItemAmountContainer,
  ItemAmountField,
  ItemRemoveBlock,
  Line,
  SummaryPriceBlock,
} from "./styled"

export const Cart: React.FC = () => {
  const { setModal } = useModalContext()
  const { cart, isInitialized } = useCartContext()

  const { removeProduct, updateProduct } = useCart()
  const { summaryDiscount, summaryPrice, finalPrice } = useOrderSummary()

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget !== e.target) {
      return
    }

    setModal(undefined)
  }

  if (!isInitialized) {
    return <h1>Loading...</h1>
  }

  return (
    <CartBlock onClick={handleOutsideClick}>
      <CartContainerStyled>
        {cart.length >= 1 ? (
          <CartItemContainer>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <CartField>
                  <CartItemImg
                    height="100px"
                    width="100px"
                    src={item.img}
                    alt=""
                  />
                </CartField>
                <CartField>{item.title}</CartField>
                <CartItemPriceBlck>
                  <div>{item.price - item.discount}$</div>
                  <div>{item.price}$</div>
                </CartItemPriceBlck>
                <ItemAmountContainer>
                  <ItemAmountField
                    cursor="pointer"
                    onClick={() => updateProduct(item.id, item.amount - 1)}
                  >
                    -
                  </ItemAmountField>
                  <ItemAmountField>{item.amount}</ItemAmountField>
                  <ItemAmountField
                    cursor="pointer"
                    onClick={() => updateProduct(item.id, item.amount + 1)}
                  >
                    +
                  </ItemAmountField>
                </ItemAmountContainer>
                <ItemRemoveBlock onClick={() => removeProduct(item.id)}>
                  <CartItemImg src={CloseIcon} />
                </ItemRemoveBlock>
              </CartItem>
            ))}
            <Line />
            <SummaryPriceBlock>
              <div>
                <span>Summary price:</span> {summaryPrice}$
              </div>
              <div>
                <span>Summary discount:</span> {summaryDiscount}$
              </div>
              <div>
                <span>Final price:</span> {finalPrice}$
              </div>
            </SummaryPriceBlock>
            <ConfirmBtnBlck>
              <Link to="/confirmpage">
                <button onClick={() => setModal(undefined)} type="button">
                  Checkout
                </button>
              </Link>
            </ConfirmBtnBlck>
          </CartItemContainer>
        ) : (
          <h1>Cart is empty</h1>
        )}
      </CartContainerStyled>
    </CartBlock>
  )
}
