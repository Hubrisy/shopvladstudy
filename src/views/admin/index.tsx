import React, { useEffect, useState } from "react"

import { api } from "../../apis"
import { SessionStorage } from "../../types"
import { handleError } from "../../utils/error"
import { getToSessionStorage } from "../../utils/storage"

export const Admin: React.FC = () => {
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const token = getToSessionStorage(SessionStorage.token)

        if (token) {
          await api.fetchUser(token)
          setLoading(false)
        }
      } catch (error) {
        handleError(error)
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
    </div>
  )
}
