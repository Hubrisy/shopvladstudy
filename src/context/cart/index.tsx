import type { Dispatch, PropsWithChildren, SetStateAction } from "react"
import React, { createContext, useContext, useEffect, useState } from "react"

import type { CouponItem, Product } from "../../types"
import { SessionStorage } from "../../types"
import { getToSessionStorage, setToSessionStorage } from "../../utils/storage"

export interface CartItem extends Product {
  amount: number
}

interface CartProps {
  cart: Array<CartItem>
  setCart: Dispatch<SetStateAction<Array<CartItem>>>
  coupon?: CouponItem
  setCoupon: Dispatch<SetStateAction<CouponItem | undefined>>
  orderId?: number | undefined
  setOrderId?: Dispatch<SetStateAction<number | undefined>>
}

const defaultCart: CartProps = {
  cart: [],
  setCart: () => {},
  coupon: undefined,
  setCoupon: () => {},
  orderId: undefined,
  setOrderId: () => {},
}

const CartContext = createContext<CartProps>(defaultCart)

export const CartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [coupon, setCoupon] = useState<CouponItem | undefined>(() => {
    const storedData = getToSessionStorage(SessionStorage.coupon)

    if (storedData) {
      return JSON.parse(storedData)
    }

    return undefined
  })
  const [orderId, setOrderId] = useState<number | undefined>(() => {
    const storedData = getToSessionStorage(SessionStorage.orderId)

    if (storedData) {
      return Number(storedData)
    }

    return undefined
  })

  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedData = getToSessionStorage(SessionStorage.cart)

    if (storedData) {
      return JSON.parse(storedData)
    }

    return []
  })

  console.log(cart)

  useEffect(() => {
    setToSessionStorage(
      SessionStorage.coupon,
      coupon ? JSON.stringify(coupon) : ""
    )
  }, [coupon])

  useEffect(() => {
    if (!orderId) return

    setToSessionStorage(SessionStorage.orderId, String(orderId))
  }, [orderId])

  useEffect(() => {
    setToSessionStorage(SessionStorage.cart, JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        coupon,
        setCoupon,
        orderId,
        setOrderId,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
