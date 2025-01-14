import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState,
} from "react"
import React from "react"

import type { ResponseOrderItemType } from "../../types"

interface OrderType {
  order: ResponseOrderItemType
  setOrder: Dispatch<SetStateAction<ResponseOrderItemType>>
}

const defaultOrderData: ResponseOrderItemType = {
  id: 0,
  first_name: "",
  last_name: "",
  street_address: "",
  apartment: "",
  city: "",
  email: "",
  phone: "",
  initial: "",
  discount: "",
  total: "",
}

const defaultOrderContext: OrderType = {
  order: defaultOrderData,
  setOrder: () => {},
}

const OrderContext = createContext<OrderType>(defaultOrderContext)

export const OrderContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [order, setOrder] = useState<ResponseOrderItemType>(defaultOrderData)

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useOrderContext = () => useContext(OrderContext)
