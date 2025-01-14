import axios from "axios"

import { apiUrl } from "../config"
import type { CartItem } from "../context/cart"
import type {
  CouponItem,
  LoginRequestData,
  ResponseOrderItemType,
  UserDataType,
} from "../types"

export const api = {
  fetchCoupon: async (code: string) => {
    const { data } = await axios.get<CouponItem>(`${apiUrl}coupon/${code}`)

    return data
  },
  fetchOrders: async (token: string) => {
    const response = await axios.get<Array<ResponseOrderItemType>>(
      `${apiUrl}admin/orders`,
      {
        headers: {
          Authorization: token,
        },
      }
    )

    return response.data
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
  getOrder: async (id: number, token: string) => {
    const response = await axios.get(`${apiUrl}admin/order/${id}`, {
      headers: {
        Authorization: token,
      },
    })

    return response.data
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
      `${apiUrl}admin/user`,
      {
        headers: {
          Authorization: token,
        },
      }
    )

    return response.data
  },
}
