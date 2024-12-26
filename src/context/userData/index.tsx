import type { Dispatch, PropsWithChildren, SetStateAction } from "react"
import React, { createContext, useContext, useEffect, useState } from "react"

import { SessionStorage, type UserDataType } from "../../types"
import { getToSessionStorage, setToSessionStorage } from "../../utils/storage"

interface UserDataContextType {
  userData: UserDataType
  setUserData: Dispatch<SetStateAction<UserDataType>>
}

const defaultUserData = {
  firstName: "",
  lastName: "",
  streetAddress: "",
  apartment: "",
  city: "",
  email: "",
  phone: "",
}

const defaultUserDataContext: UserDataContextType = {
  userData: defaultUserData,
  setUserData: () => {},
}

const UserDataContext = createContext(defaultUserDataContext)

export const UserDataContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserDataType>(() => {
    const storedUser = getToSessionStorage(SessionStorage.userData)

    if (storedUser) {
      return JSON.parse(storedUser)
    }

    return defaultUserData
  })

  useEffect(() => {
    setToSessionStorage(SessionStorage.userData, JSON.stringify(userData))
  }, [userData])

  // console.log(userData)

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  )
}

export const useUserDataContext = () => useContext(UserDataContext)
