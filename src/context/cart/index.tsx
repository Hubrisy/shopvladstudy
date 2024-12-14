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
  isInitialized: boolean
  setIsInitialized: Dispatch<SetStateAction<boolean>>
  coupon?: CouponItem
  setCoupon: Dispatch<SetStateAction<CouponItem | undefined>>
}

const defaultCart: CartProps = {
  cart: [],
  setCart: () => {},
  isInitialized: false,
  setIsInitialized: () => {},
  coupon: undefined,
  setCoupon: () => {},
}

const CartContext = createContext<CartProps>(defaultCart)

export const CartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [coupon, setCoupon] = useState<CouponItem | undefined>(undefined)
  const [cart, setCart] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)
  console.log(cart)

  useEffect(() => {
    const storedData = getToSessionStorage(SessionStorage.cart)

    if (storedData) {
      setCart(JSON.parse(storedData))
    }

    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) {
      setToSessionStorage(SessionStorage.cart, JSON.stringify(cart))
    }
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        coupon,
        setCoupon,
        isInitialized,
        setIsInitialized,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
