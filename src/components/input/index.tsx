import React from "react"

import { InputStyled } from "./styled"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
}) => {
  return (
    <InputStyled placeholder={placeholder} onChange={onChange} value={value} />
  )
}
