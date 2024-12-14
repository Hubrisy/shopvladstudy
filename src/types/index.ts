export enum SessionStorage {
  cart = "cart",
}

export interface Product {
  title: string
  img: string
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
