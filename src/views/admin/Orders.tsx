import React, { useEffect, useState } from "react"

import { api } from "../../apis"
import { useUserDataContext } from "../../context/userData"
import type { ResponseOrderItemType } from "../../types"
import { handleError } from "../../utils/error"

export const Orders: React.FC = () => {
  const { userToken } = useUserDataContext()
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

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {orders.map((item) => (
            <div key={item.id}>
              <div>
                {item.first_name} {item.last_name}
              </div>
              <div>{item.phone}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
