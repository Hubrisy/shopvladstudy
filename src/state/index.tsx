import type { PropsWithChildren } from "react"
import type React from "react"

import { ModalContextProvider } from "../context/modal"

export const StateProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ModalContextProvider>{children}</ModalContextProvider>
}
