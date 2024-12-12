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
