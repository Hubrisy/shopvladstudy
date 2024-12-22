import { useMemo } from "react"

import { useCartContext } from "../context/cart"

export const useOrderSummary = () => {
  const { cart, coupon } = useCartContext()

  const summaryPrice: number = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0)
  }, [cart])

  const summaryDiscount: number = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.discount * item.amount, 0)
  }, [cart])

  const couponDiscount = useMemo(() => {
    if (!coupon) return 0

    if (coupon.type === "percentage") {
      return summaryPrice * (coupon.discount / 100)
    }

    return coupon.discount
  }, [coupon, summaryPrice])

  const finalPrice = summaryPrice - summaryDiscount - couponDiscount

  return {
    summaryDiscount,
    summaryPrice,
    couponDiscount,
    finalPrice,
  }
}
