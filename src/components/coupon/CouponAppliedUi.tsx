import type React from "react"

import type { CouponItem } from "../../types"

interface Props {
  coupon: CouponItem
  removeCoupon: () => void
}

export const AppliedCoupon: React.FC<Props> = ({ coupon, removeCoupon }) => (
  <div>
    <h1>{coupon.code}</h1>
    <button type="button" onClick={removeCoupon}>
      Remove
    </button>
  </div>
)
