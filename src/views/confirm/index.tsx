import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "../../components/button"
import { CouponBlock } from "../../components/coupon"
import { Input } from "../../components/input"
import { useCartContext } from "../../context/cart"
import { useUserDataContext } from "../../context/userData"
import { useOrderSummary } from "../../hooks/useOrderSummary"
import { Routes } from "../../routes"
import type { UserDataType } from "../../types"
import { emailValidation, validatePhoneNumber } from "../../utils/validation"
import {
  ConfirmContentBlock,
  ConfirmPageContainer,
  ConfrimPageBlock,
  FinalSummaryBlock,
  FinalSummaryContainer,
  FormBlock,
  FormBtnContainer,
  FormDivStyled,
  InputContainer,
  ShipparyBlock,
  SummaryBlock,
  SummaryCartBlock,
  SummaryCartItemBlock,
  SummaryCartItemField,
  SummaryCartItemInfo,
} from "./styled"

type ErrorsType = Record<keyof UserDataType, string>

export const ConfirmPage = () => {
  const { userData, setUserData } = useUserDataContext()

  const [errors, setErrors] = useState<ErrorsType>(
    Object.keys(userData).reduce(
      (acc, key) => ({ ...acc, [key]: "" }),
      {} as ErrorsType
    )
  )

  const { cart } = useCartContext()
  const { summaryDiscount, couponDiscount, finalPrice, summaryPrice } =
    useOrderSummary()

  const onChange = (name: keyof UserDataType, value: string) => {
    setUserData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const navigate = useNavigate()

  const checkValid = (): boolean => {
    const innerErrors: ErrorsType = Object.keys(userData).reduce(
      (acc, key) => ({ ...acc, [key]: "" }),
      {} as ErrorsType
    )

    // todo: add validation for all input
    if (userData.firstName.length < 4 || userData.firstName.length > 20) {
      innerErrors.firstName =
        "Your name should be less than 7 letters and larger than 4"
    }

    if (userData.lastName.length < 4 || userData.lastName.length > 20) {
      innerErrors.lastName = "Your last name is less then 4"
    }

    if (!emailValidation(userData.email)) {
      innerErrors.email = "your email is wrong"
      console.log("no")
    }

    if (!validatePhoneNumber(userData.phone)) {
      innerErrors.phone = "something wrong with your number"
    }

    setErrors(innerErrors)

    return Object.values(innerErrors).every((value) => value === "")
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()

    if (checkValid()) {
      console.log("Form submitted:", userData)
      navigate(Routes.thankspage)
    }
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
                  <InputContainer>
                    <Input
                      name="name"
                      placeholder="First Name"
                      value={userData.firstName}
                      onChange={(e) => onChange("firstName", e.target.value)}
                      isError={!!errors.firstName}
                      inputMode="text"
                      errorMessage={errors.firstName}
                      type="text"
                      required
                    />
                  </InputContainer>
                  <InputContainer>
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={userData.lastName}
                      onChange={(e) => onChange("lastName", e.target.value)}
                      isError={!!errors.lastName}
                      errorMessage={errors.lastName}
                      inputMode="text"
                      type="text"
                      required
                    />
                  </InputContainer>
                </FormDivStyled>
                <FormDivStyled flexDirection="column">
                  <Input
                    name="address"
                    placeholder="Street address"
                    value={userData.streetAddress}
                    onChange={(e) => onChange("streetAddress", e.target.value)}
                    inputMode="text"
                    type="text"
                    required
                  />
                  <Input
                    name="apartment"
                    placeholder="Apartment,suite,etc(optional)"
                    value={userData.apartment}
                    onChange={(e) => onChange("apartment", e.target.value)}
                    inputMode="text"
                    type="text"
                  />
                  <Input
                    name="city"
                    placeholder="City/town"
                    value={userData.city}
                    onChange={(e) => onChange("city", e.target.value)}
                    inputMode="text"
                    type="text"
                    required
                  />
                  <Input
                    name="email"
                    placeholder="Email address"
                    value={userData.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    inputMode="email"
                    isError={!!errors.email}
                    errorMessage={errors.email}
                    type="email"
                    required
                  />
                  <Input
                    name="number"
                    placeholder="Your number"
                    value={userData.phone}
                    onChange={(e) => onChange("phone", e.target.value)}
                    isError={!!errors.phone}
                    errorMessage={errors.phone}
                    inputMode="tel"
                    type="tel"
                    required
                  />
                </FormDivStyled>
                <FormBtnContainer>
                  <Button type="submit" className="form-btn">
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
