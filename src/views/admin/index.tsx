import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../apis"
import { useUserDataContext } from "../../context/userData"
import { Routes } from "../../routes"
import { SessionStorage } from "../../types"
import { handleError } from "../../utils/error"
import {
  getToSessionStorage,
  removeFromSessionStorage,
} from "../../utils/storage"

export const Admin: React.FC = () => {
  const [isLoading, setLoading] = useState(true)
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
        setLoading(true)

        const token = getToSessionStorage(SessionStorage.token)

        if (!token) {
          throw new Error("token not found")
        }

        await api.fetchUser(token)
        setUserToken(token)
        setLoading(false)
      } catch (error) {
        handleError(error)
        navigate(Routes.login)
      }
    }

    fetchUser()
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Admin</h1>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}
