import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../apis"
import { Button } from "../../components/button"
import { useUserDataContext } from "../../context/userData"
import { Routes } from "../../routes"
import { SessionStorage } from "../../types"
import { handleError } from "../../utils/error"
import {
  getToSessionStorage,
  removeFromSessionStorage,
} from "../../utils/storage"
import { Orders } from "./Orders"
import {
  AdminPanelBlock,
  AdminPanelContainer,
  NavSection,
  OrdersSection,
  OrdersSectionTitleBlock,
} from "./styled"

export const Admin: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { userToken, setUserToken } = useUserDataContext()
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await api.logout(userToken)
      removeFromSessionStorage(SessionStorage.token)
    } catch (e) {
      handleError(e)
    } finally {
      navigate(Routes.login)
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true)

        const token = getToSessionStorage(SessionStorage.token)

        if (!token) {
          throw new Error("token not found")
        }

        await api.fetchUser(token)
        setUserToken(token)
        setIsLoading(false)
      } catch (error) {
        handleError(error)
        removeFromSessionStorage(SessionStorage.token)
        navigate(Routes.login)
      }
    }

    fetchUser()
  }, [])

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <AdminPanelContainer>
      <AdminPanelBlock>
        <NavSection>
          <h1>Admin</h1>
        </NavSection>
        <OrdersSection>
          <OrdersSectionTitleBlock>
            <h1>Orders</h1>
            <Button onClick={logout}>Logout</Button>
          </OrdersSectionTitleBlock>
          <Orders />
        </OrdersSection>
      </AdminPanelBlock>
    </AdminPanelContainer>
  )
}
