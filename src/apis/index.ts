import axios from "axios"

import { apiUrl } from "../config"
import type { CartItem } from "../context/cart"
import type { CouponItem, UserDataType } from "../types"

export const api = {
  fetchCoupon: async (code: string) => {
    const { data } = await axios.get<CouponItem>(`${apiUrl}coupon/${code}`)

    return data
  },
  createOrder: async (shipping: UserDataType, items: Array<CartItem>) => {
    const { data } = await axios.post<{ orderId: number }>(
      `${apiUrl}order/create`,
      {
        shipping,
        items,
      }
    )

    return data
  },
}
