import React from "react"

import { ErrorBlock, InputStyled } from "./styled"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  isError?: boolean
  errorMessage?: string
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  isError,
  errorMessage,
  ...rest
}) => {
  return (
    <div>
      <InputStyled
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        isError={!!isError}
        {...rest}
      />
      {!!errorMessage && <ErrorBlock>{errorMessage}</ErrorBlock>}
    </div>
  )
}
