import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`
