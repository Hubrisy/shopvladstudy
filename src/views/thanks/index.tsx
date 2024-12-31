import React from "react"
import { Link } from "react-router-dom"

import { useCartContext } from "../../context/cart"
import { useUserDataContext } from "../../context/userData"
import { useOrderSummary } from "../../hooks/useOrderSummary"
import {
  Line,
  ThanksCartContainer,
  ThanksCartOrderBlock,
  ThanksFinalPrice,
  ThanksItem,
  ThanksItemBlock,
  ThanksPageBlock,
  ThanksPageContainer,
  ThanksUserInfoBlock,
} from "./styled"

export const ThanksPage = () => {
  const { cart } = useCartContext()
  const { userData } = useUserDataContext()

  const { finalPrice } = useOrderSummary()

  // const userDataArr: Array<string> = []

  const userDataArr = Object.entries(userData)
  console.log("obj", userDataArr)

  return (
    <ThanksPageContainer>
      <ThanksPageBlock>
        <div>Thank you for your purchasement ♡</div>
        <ThanksCartContainer>
          <ThanksUserInfoBlock>
            {userDataArr.map(([key, value]) => (
              <ThanksItem key={key}>
                {key}: {value}
              </ThanksItem>
            ))}
          </ThanksUserInfoBlock>
          <Line />
          <h4>Your orders:</h4>
          {cart.map((item) => (
            <ThanksCartOrderBlock key={item.id}>
              <ThanksItemBlock>
                <img src={item.titleImg} alt="" />
              </ThanksItemBlock>
              <ThanksItemBlock display="flex">
                <ThanksItem width="100px">{`"${item.title}"`}</ThanksItem>
                <ThanksItem fontSize="18px">Amount:{item.amount}</ThanksItem>
              </ThanksItemBlock>
              <ThanksItemBlock>
                <ThanksItem fontSize="18px" textDecoration="line-through">
                  {item.price}$
                </ThanksItem>
                <ThanksItem fontSize="22px">
                  {item.price - item.discount}$
                </ThanksItem>
              </ThanksItemBlock>
            </ThanksCartOrderBlock>
          ))}
          <ThanksFinalPrice>
            <div>Final price:{finalPrice}$</div>
          </ThanksFinalPrice>
          <Line />
        </ThanksCartContainer>
        <div>
          <Link to="/">
            <button type="button">Back to site</button>
          </Link>
        </div>
      </ThanksPageBlock>
    </ThanksPageContainer>
  )
}
