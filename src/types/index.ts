export enum SessionStorage {
  cart = "cart",
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
