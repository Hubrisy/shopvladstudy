import type { PropsWithChildren } from "react"
import type React from "react"

import { CartContextProvider } from "../context/cart"
import { ModalContextProvider } from "../context/modal"

export const StateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <CartContextProvider>
      <ModalContextProvider>{children}</ModalContextProvider>
    </CartContextProvider>
  )
}
