/* eslint-disable react/button-has-type */
import type { PropsWithChildren } from "react"
import React from "react"
import styled from "styled-components"

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  type?: "submit" | "reset" | "button"
}

export const Button: React.FC<PropsWithChildren<BtnProps>> = ({
  onClick,
  type = "button",
  children,
  ...rest
}) => {
  return (
    <ButtonStyled type={type} onClick={onClick} {...rest}>
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  border-radius: 10px;
  font-size: 20px;
  border: none;
  padding: 15px;
  width: 100%;
  /* box-sizing: border-box; */
`
