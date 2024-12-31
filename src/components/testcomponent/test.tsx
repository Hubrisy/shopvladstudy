import React, { useState } from "react"
import styled from "styled-components"

interface InputProps {
  border?: string
}

const InputStyled = styled.input<InputProps>`
  width: 100%;
  height: 64px;
  border-radius: 12px;
  background-color: #fff;
  border: ${(props) => props.border || "5px solid black"};
`

export const TestOne = () => {
  const [isError, setIsError] = useState(false)

  return (
    <>
      <InputStyled border={isError ? "none" : "5px solid red"} />
      <button type="button" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
    </>
  )
}
