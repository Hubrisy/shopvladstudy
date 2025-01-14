import React, { useEffect, useState } from "react"

import { api } from "../../apis"
import { ModalType, useModalContext } from "../../context/modal"
import { useOrderContext } from "../../context/order"
import { useUserDataContext } from "../../context/userData"
import type { ResponseOrderItemType } from "../../types"
import { handleError } from "../../utils/error"
import { OrdersBlock, OrdersContent } from "./styled"

export const Orders: React.FC = () => {
  const { userToken } = useUserDataContext()
  const { setModal } = useModalContext()
  const { setOrder } = useOrderContext()
  const [orders, setOrders] = useState<Array<ResponseOrderItemType>>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const f = async () => {
      try {
        const response = await api.fetchOrders(userToken)
        setOrders(response)
        setIsLoading(false)
      } catch (e) {
        handleError(e)
      }
    }

    f()
  }, [])

  const handleClick = (item: ResponseOrderItemType) => {
    setOrder(item)
    setModal(ModalType.orders_panel)
  }

  return (
    <OrdersBlock>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {orders.map((item) => (
            <OrdersContent key={item.id} onClick={() => handleClick(item)}>
              <div>
                {item.first_name} {item.last_name}
              </div>
              <div>{item.phone}</div>
            </OrdersContent>
          ))}
        </div>
      )}
    </OrdersBlock>
  )
}
