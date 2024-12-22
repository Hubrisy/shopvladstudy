import React from "react"

import { Input } from "../../components/input"
import { useCartContext } from "../../context/cart"
import { useOrderSummary } from "../../hooks/useOrderSummary"
import {
  ConfirmContentBlock,
  ConfirmPageContainer,
  ConfrimPageBlock,
  CouponBlock,
  FinalSummaryBlock,
  FinalSummaryContainer,
  FormBlock,
  FormBtnContainer,
  FormDivStyled,
  ShipparyBlock,
  SummaryBlock,
  SummaryCartBlock,
  SummaryCartItemBlock,
  SummaryCartItemField,
  SummaryCartItemInfo,
} from "./styled"

export const ConfirmPage = () => {
  const { cart } = useCartContext()
  const { summaryDiscount, summaryPrice } = useOrderSummary()

  return (
    <ConfirmPageContainer>
      <ConfrimPageBlock>
        <h1>GREENMIND</h1>
        <ConfirmContentBlock>
          <ShipparyBlock>
            <FormBlock>
              <h3>Shipping details</h3>
              <form action="">
                <FormDivStyled gap="8px">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </FormDivStyled>
                <FormDivStyled flexDirection="column">
                  <Input placeholder="Street address" />
                  <Input placeholder="Apartment,suite,etc(optional)" />
                  <Input placeholder="City/town" />
                  <Input placeholder="Email address" />
                  <Input placeholder="Your number" />
                </FormDivStyled>
                <FormBtnContainer>
                  <button type="button">Confirm</button>
                </FormBtnContainer>
              </form>
            </FormBlock>
          </ShipparyBlock>
          <SummaryBlock>
            <h3>Order Summary</h3>
            <SummaryCartBlock>
              {cart.map((item) => (
                <SummaryCartItemBlock key={item.id}>
                  <SummaryCartItemInfo>
                    <img src={item.titleImg} alt="" />
                    <SummaryCartItemField width="150px">
                      {item.title}
                    </SummaryCartItemField>
                  </SummaryCartItemInfo>
                  <SummaryCartItemInfo>
                    <SummaryCartItemField>
                      Qty:{item.amount}
                    </SummaryCartItemField>
                  </SummaryCartItemInfo>
                  <SummaryCartItemInfo flexDirection="column">
                    <SummaryCartItemField>{item.price}$</SummaryCartItemField>
                    <SummaryCartItemField
                      color="red"
                      textDecoration="line-through"
                    >
                      {item.price + item.discount}$
                    </SummaryCartItemField>
                  </SummaryCartItemInfo>
                </SummaryCartItemBlock>
              ))}
            </SummaryCartBlock>
            <CouponBlock>
              <Input placeholder="Coupon code" />
              <button type="button">Apply</button>
            </CouponBlock>
            <FinalSummaryContainer>
              <FinalSummaryBlock color="red">
                <div>Discount:</div>
                <div>-{summaryDiscount}$</div>
              </FinalSummaryBlock>
              <FinalSummaryBlock>
                <div>Shipping:</div>
                <div>free</div>
              </FinalSummaryBlock>
              <FinalSummaryBlock fontSize="24px" fontWeight="600">
                <div>Total:</div>
                <div>{summaryPrice}$</div>
              </FinalSummaryBlock>
            </FinalSummaryContainer>
          </SummaryBlock>
        </ConfirmContentBlock>
      </ConfrimPageBlock>
    </ConfirmPageContainer>
  )
}
