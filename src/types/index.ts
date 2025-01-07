export enum SessionStorage {
  cart = "cart",
  userData = "userData",
  orderId = "orderId",
  coupon = "coupon",
  token = "token",
}

export interface Product {
  title: string
  titleImg: string
  img: Array<string>
  price: number
  id: number
  description: string
  discount: number
}

export interface CouponItem {
  id: number
  code: string
  discount: number
  type: "percentage" | "fixed"
}

export interface UserDataType {
  firstName: string
  lastName: string
  streetAddress: string
  apartment?: string
  city: string
  email: string
  phone: string
}

export interface LoginRequestData {
  email: string
  password: string
}

export type ErrorType = boolean
