import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../apis"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Routes } from "../../routes"
import { type LoginRequestData, SessionStorage } from "../../types"
import { handleError } from "../../utils/error"
import { getToSessionStorage, setToSessionStorage } from "../../utils/storage"
import {
  AdminPanelBlock,
  AdminPanelBtnBlock,
  AdminPanelContainer,
  AdminPanelInputBlock,
  AdminPanelInputContainer,
} from "./styled"

export const Login = () => {
  const [mailValue, setMailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleMailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailValue(e.target.value)
  }

  const handlePassValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      e.stopPropagation()

      if (!mailValue || !passwordValue) {
        return
      }

      setIsLoading(true)

      const signInData: LoginRequestData = {
        email: mailValue,
        password: passwordValue,
      }

      const response = await api.login(signInData)
      setToSessionStorage(SessionStorage.token, response.token)
      navigate(Routes.admin)
    } catch (error) {
      handleError(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const token = getToSessionStorage(SessionStorage.token)

    if (token) {
      navigate(Routes.admin)
    }
  }, [])

  return (
    <AdminPanelContainer>
      <AdminPanelBlock>
        <h1>Sign in</h1>
        <AdminPanelInputContainer as="form" onSubmit={onSubmit}>
          <AdminPanelInputBlock>
            <h3>Email*</h3>
            <Input
              placeholder="Email"
              value={mailValue}
              onChange={handleMailValue}
            />
          </AdminPanelInputBlock>
          <AdminPanelInputBlock>
            <h3>Password*</h3>
            <Input
              type="password"
              placeholder="Password"
              value={passwordValue}
              onChange={handlePassValue}
            />
          </AdminPanelInputBlock>
          {/* <AdminPanelInputBlock>
            <h3>Username*</h3>
            <Input placeholder="Username" />
          </AdminPanelInputBlock> */}
          <AdminPanelBtnBlock>
            <Button type="submit" disabled={isLoading}>
              Sign in
            </Button>
          </AdminPanelBtnBlock>
        </AdminPanelInputContainer>
      </AdminPanelBlock>
    </AdminPanelContainer>
  )
}
