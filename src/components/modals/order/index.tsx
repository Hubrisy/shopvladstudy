import React, { useEffect, useState } from "react"

import { api } from "../../../apis"
import { useModalContext } from "../../../context/modal"
import { useOrderContext } from "../../../context/order"
import { useUserDataContext } from "../../../context/userData"
import { handleError } from "../../../utils/error"
import {
  OrderDetailsBlock,
  OrderDetailsContainer,
  OrderUserInfo,
  UserInfoItem,
  UserOrderBlock,
  UserOrderInfo,
} from "./styled"

interface OrderItemType {
  amount: number
  id: number
  order_id: number
  price: string
  title: string
}

export const OrderDetails = () => {
  const { setModal } = useModalContext()
  const { order } = useOrderContext()
  const { userToken } = useUserDataContext()
  const [orderItems, setOrderItems] = useState<OrderItemType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  console.log(order)

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget !== e.target) {
      return
    }

    setModal(undefined)
  }

  useEffect(() => {
    const f = async () => {
      try {
        const response = await api.getOrder(order.id, userToken)
        setOrderItems(response)
        setIsLoading(false)
      } catch (e) {
        handleError(e)
      }
    }

    f()
  }, [])

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <OrderDetailsContainer onClick={handleOutsideClick}>
          <OrderDetailsBlock>
            <OrderUserInfo>
              <div>User personal data:</div>
              <UserInfoItem>Name: {order.first_name}</UserInfoItem>
              <UserInfoItem>Second name: {order.last_name}</UserInfoItem>
              <UserInfoItem>Phone: +{order.phone}</UserInfoItem>
              <UserInfoItem>Email:{order.email}</UserInfoItem>
              <UserInfoItem>Email:{order.city}</UserInfoItem>
              <UserInfoItem>Email:{order.street_address}</UserInfoItem>
              <UserInfoItem>Apartment:{order.apartment}</UserInfoItem>
            </OrderUserInfo>
            <UserOrderInfo>
              {orderItems.map((item) => (
                <UserOrderBlock key={item.id}>
                  <UserInfoItem>{item.title}</UserInfoItem>
                  <UserInfoItem>{item.price}</UserInfoItem>
                  <UserInfoItem>{item.amount}</UserInfoItem>
                </UserOrderBlock>
              ))}
            </UserOrderInfo>
          </OrderDetailsBlock>
        </OrderDetailsContainer>
      )}
    </>
  )
}
