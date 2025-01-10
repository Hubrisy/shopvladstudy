import axios from "axios"

import { apiUrl } from "../config"
import type { CartItem } from "../context/cart"
import type { CouponItem, LoginRequestData, UserDataType } from "../types"

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
  login: async (data: LoginRequestData) => {
    const response = await axios.post<{ token: string }>(
      `${apiUrl}auth/login`,
      data
    )

    return response.data
  },
  logout: async (token: string) => {
    const response = await axios.delete(`${apiUrl}auth/logout`, {
      headers: {
        Authorization: token,
      },
    })

    return response.data
  },

  fetchUser: async (token: string) => {
    const response = await axios.get<{ id: number; email: string }>(
      `${apiUrl}user`,
      {
        headers: {
          Authorization: token,
        },
      }
    )

    return response.data
  },
}
