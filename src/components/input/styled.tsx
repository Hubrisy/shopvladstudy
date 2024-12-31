import styled, { css } from "styled-components"

interface InputProps {
  isError: boolean
}

export const InputStyled = styled.input<InputProps>`
  width: 100%;
  height: 64px;
  border-radius: 12px;
  background-color: #fff;

  ${(props) =>
    props.isError &&
    css`
      border: 2px solid red;
    `}
`
export const ErrorBlock = styled.div`
  margin-top: 5px;
  color: red;
`
