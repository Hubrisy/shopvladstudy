import React from "react"

import { ModalType, useModalContext } from "../../context/modal"

const Cart = React.lazy(() =>
  import("./cart").then((module) => ({ default: module.Cart }))
)

const OrderDetails = React.lazy(() =>
  import("./order").then((module) => ({ default: module.OrderDetails }))
)

export const Modals: React.FC = () => {
  const { modal } = useModalContext()

  if (!modal) {
    return null
  }

  return (
    <>
      {modal === ModalType.cart && <Cart />}
      {modal === ModalType.orders_panel && <OrderDetails />}
    </>
  )

  // return <>{modal === ModalType.cart ? <Cart /> : "none"}</>
}
