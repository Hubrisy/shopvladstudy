import { useMemo } from "react"

import { useCartContext } from "../context/cart"

export const useOrderSummary = () => {
  const { cart } = useCartContext()

  const summaryPrice: number = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0)
  }, [cart])

  const summaryDiscount: number = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.discount * item.amount, 0)
  }, [cart])

  const finalPrice = summaryPrice - summaryDiscount

  return {
    summaryDiscount,
    summaryPrice,
    finalPrice,
  }
}
