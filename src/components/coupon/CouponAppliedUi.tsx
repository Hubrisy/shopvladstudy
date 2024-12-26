import type React from "react"

import type { CouponItem } from "../../types"
import { AppliedCouponBlock } from "./styled"

interface Props {
  coupon: CouponItem
  removeCoupon: () => void
}

export const AppliedCoupon: React.FC<Props> = ({ coupon, removeCoupon }) => (
  <AppliedCouponBlock>
    <h1>Your coupon: {coupon.code}</h1>
    <button type="button" onClick={removeCoupon}>
      Remove coupon
    </button>
  </AppliedCouponBlock>
)
