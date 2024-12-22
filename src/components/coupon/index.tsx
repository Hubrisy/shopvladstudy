import React, { useState } from "react"

import { api } from "../../apis"
import { useCartContext } from "../../context/cart"
import { delay } from "../../utils/delay"
import { AppliedCoupon } from "./CouponAppliedUi"
import { CouponBlockUi } from "./CouponBlockUi"

export const CouponBlock: React.FC = () => {
  const { coupon, setCoupon } = useCartContext()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>("")
  const [errorMsg, setErrorMsg] = useState<string>("")

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isLoading) return
    setInputValue(e.target.value)
    setErrorMsg("")
  }

  const applyCoupon = async () => {
    setIsLoading(true)
    setErrorMsg("")

    try {
      const coupon = await api.fetchCoupon(inputValue)
      console.log(coupon)
      await delay(3000)

      setCoupon(coupon)
      setInputValue("")
    } catch (e) {
      console.error(e)
      setErrorMsg("Invalid coupon")
    }

    setIsLoading(false)
  }

  return coupon ? (
    <AppliedCoupon coupon={coupon} removeCoupon={() => setCoupon(undefined)} />
  ) : (
    <CouponBlockUi
      value={inputValue}
      onChange={onChange}
      applyCoupon={applyCoupon}
      errorMsg={errorMsg}
      isLoading={isLoading}
    />
  )
}
