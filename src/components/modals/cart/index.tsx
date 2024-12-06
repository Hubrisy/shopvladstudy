import React from "react"

import { useModalContext } from "../../../context/modal"

export const Cart: React.FC = () => {
  const { setModal } = useModalContext()

  return <div onClick={() => setModal(undefined)}>hi</div>
}
