import type { PropsWithChildren } from "react"
import type React from "react"

import { CartContextProvider } from "../context/cart"
import { ModalContextProvider } from "../context/modal"
import { OrderContextProvider } from "../context/order"
import { UserDataContextProvider } from "../context/userData"

export const StateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <CartContextProvider>
      <UserDataContextProvider>
        <OrderContextProvider>
          <ModalContextProvider>{children}</ModalContextProvider>
        </OrderContextProvider>
      </UserDataContextProvider>
    </CartContextProvider>
  )
}
