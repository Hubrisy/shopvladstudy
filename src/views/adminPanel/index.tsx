import React, { useState } from "react"

import { api } from "../../apis"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import type { PersonalCabinetType } from "../../types"
import {
  AdminPanelBlock,
  AdminPanelBtnBlock,
  AdminPanelContainer,
  AdminPanelInputBlock,
  AdminPanelInputContainer,
  SuccessBlock,
} from "./styled"

export const AdminPanel = () => {
  const [mailValue, setMailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [isLogged, setIsLogged] = useState(false)

  const handleMailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailValue(e.target.value)
  }

  const handlePassValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value)
  }

  const onSubmit = async () => {
    const signInData: PersonalCabinetType = {
      email: mailValue,
      password: passwordValue,
    }

    setIsLogged(false)

    try {
      const validCabinet = await api.personalCabinet(signInData)

      if (validCabinet) {
        console.log("Login successful:", validCabinet)
        setIsLogged(true)
      } else {
        console.log("Invalid email or password")
      }
    } catch (error) {
      console.error("Error during login:", error)
    }

    setTimeout(() => {
      setIsLogged(false)
    }, 3000)
  }

  return (
    <AdminPanelContainer>
      {isLogged && (
        <SuccessBlock>
          <div>Success</div>
        </SuccessBlock>
      )}
      <AdminPanelBlock>
        <h1>Sign in</h1>
        <AdminPanelInputContainer>
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
              placeholder="Password"
              value={passwordValue}
              onChange={handlePassValue}
            />
          </AdminPanelInputBlock>
          {/* <AdminPanelInputBlock>
            <h3>Username*</h3>
            <Input placeholder="Username" />
          </AdminPanelInputBlock> */}
        </AdminPanelInputContainer>
        <AdminPanelBtnBlock>
          <Button onClick={onSubmit}>Sign up</Button>
        </AdminPanelBtnBlock>
      </AdminPanelBlock>
    </AdminPanelContainer>
  )
}
