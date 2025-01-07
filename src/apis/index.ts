import axios from "axios"

import { apiUrl } from "../config"
import type { CartItem } from "../context/cart"
import type { CouponItem, PersonalCabinetType, UserDataType } from "../types"

export const api = {
  fetchCoupon: async (code: string) => {
    const { data } = await axios.get<CouponItem>(`${apiUrl}coupon/${code}`)

    return data
  },
  createOrder: async (
    shipping: UserDataType,
    items: Array<CartItem>,
    coupon?: CouponItem
  ) => {
    const { data } = await axios.post<{ orderId: number }>(
      `${apiUrl}order/create`,
      {
        shipping,
        items,
        coupon,
      }
    )

    return data
  },
  personalCabinet: async (signIn: PersonalCabinetType) => {
    const { data } = await axios.post<PersonalCabinetType>(
      `${apiUrl}account`,
      signIn
    )

    return data
  },
}
