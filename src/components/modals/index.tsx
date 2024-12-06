import React from "react"

import { ModalType, useModalContext } from "../../context/modal"
import { Cart } from "./cart"

export const Modals: React.FC = () => {
  const { modal } = useModalContext()

  if (!modal) {
    return null
  }

  return <>{modal === ModalType.cart && <Cart />}</>
}
