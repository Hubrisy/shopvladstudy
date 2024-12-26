import React from "react"

import { Button } from "../../components/button"
import { CouponBlock } from "../../components/coupon"
import { Input } from "../../components/input"
import { useCartContext } from "../../context/cart"
import { useUserDataContext } from "../../context/userData"
import { useOrderSummary } from "../../hooks/useOrderSummary"
import type { UserDataType } from "../../types"
import {
  ConfirmContentBlock,
  ConfirmPageContainer,
  ConfrimPageBlock,
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
  const { userData, setUserData } = useUserDataContext()
  const { cart } = useCartContext()
  const { summaryDiscount, couponDiscount, finalPrice, summaryPrice } =
    useOrderSummary()

  const onChange = (name: keyof UserDataType, value: string) => {
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const checkValid = () => {
    if (userData.firstName.length < 4) {
      console.log("name too short")
    } else {
      console.log("nice name buddy")
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log("form submited", userData)
  }

  return (
    <ConfirmPageContainer>
      <ConfrimPageBlock>
        <h1>GREENMIND</h1>
        <ConfirmContentBlock>
          <ShipparyBlock>
            <FormBlock>
              <h3>Shipping details</h3>
              <form onSubmit={onSubmit}>
                <FormDivStyled gap="8px">
                  <Input
                    name="name"
                    placeholder="First Name"
                    value={userData.firstName}
                    onChange={(e) => onChange("firstName", e.target.value)}
                    inputMode="text"
                    required
                  />
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    value={userData.lastName}
                    onChange={(e) => onChange("lastName", e.target.value)}
                    inputMode="text"
                    required
                  />
                </FormDivStyled>
                <FormDivStyled flexDirection="column">
                  <Input
                    name="address"
                    placeholder="Street address"
                    value={userData.streetAddress}
                    onChange={(e) => onChange("streetAddress", e.target.value)}
                    inputMode="text"
                    required
                  />
                  <Input
                    name="apartment"
                    placeholder="Apartment,suite,etc(optional)"
                    value={userData.apartment}
                    onChange={(e) => onChange("apartment", e.target.value)}
                    inputMode="text"
                  />
                  <Input
                    name="city"
                    placeholder="City/town"
                    value={userData.city}
                    onChange={(e) => onChange("city", e.target.value)}
                    inputMode="text"
                    required
                  />
                  <Input
                    name="email"
                    placeholder="Email address"
                    value={userData.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    inputMode="email"
                    required
                  />
                  <Input
                    name="number"
                    placeholder="Your number"
                    value={userData.phone}
                    onChange={(e) => onChange("phone", e.target.value)}
                    inputMode="tel"
                    required
                  />
                </FormDivStyled>
                <FormBtnContainer>
                  <Button
                    onClick={checkValid}
                    type="submit"
                    className="form-btn"
                  >
                    Confirm
                  </Button>
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
            <CouponBlock />
            <FinalSummaryContainer>
              <FinalSummaryBlock>
                <div>Price:</div>
                <div>{summaryPrice}$</div>
              </FinalSummaryBlock>
              <FinalSummaryBlock color="red">
                <div>Discount:</div>
                <div>-{summaryDiscount}$</div>
              </FinalSummaryBlock>
              {!!couponDiscount && (
                <FinalSummaryBlock color="red">
                  <div>Coupon discount:</div>
                  <div>-{couponDiscount.toFixed(2)}$</div>
                </FinalSummaryBlock>
              )}
              <FinalSummaryBlock>
                <div>Shipping:</div>
                <div>free</div>
              </FinalSummaryBlock>
              <FinalSummaryBlock fontSize="24px" fontWeight="600">
                <div>Total:</div>
                <div>{finalPrice}$</div>
              </FinalSummaryBlock>
            </FinalSummaryContainer>
          </SummaryBlock>
        </ConfirmContentBlock>
      </ConfrimPageBlock>
    </ConfirmPageContainer>
  )
}
