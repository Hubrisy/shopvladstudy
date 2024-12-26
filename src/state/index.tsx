import type { PropsWithChildren } from "react"
import type React from "react"

import { CartContextProvider } from "../context/cart"
import { ModalContextProvider } from "../context/modal"
import { UserDataContextProvider } from "../context/userData"

export const StateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <CartContextProvider>
      <UserDataContextProvider>
        <ModalContextProvider>{children}</ModalContextProvider>
      </UserDataContextProvider>
    </CartContextProvider>
  )
}
