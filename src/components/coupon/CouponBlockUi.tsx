import React from "react"

import { Input } from "../input"
import { CouponBlockStyled } from "./styled"

interface Props {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  applyCoupon: () => Promise<void>
  errorMsg: string
  isLoading: boolean
}

export const CouponBlockUi: React.FC<Props> = ({
  value,
  onChange,
  applyCoupon,
  errorMsg,
  isLoading,
}) => (
  <div>
    <CouponBlockStyled>
      <Input value={value} onChange={onChange} placeholder="Coupon code" />
      <button type="button" onClick={applyCoupon} disabled={isLoading}>
        {isLoading ? "Loading..." : "Apply"}
      </button>
    </CouponBlockStyled>
    {errorMsg && <div>{errorMsg}</div>}
  </div>
)
