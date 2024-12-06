import styled from "styled-components"

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
`
export const LogoStyled = styled.div`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`
export const NavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 575px;
  align-items: center;
`
export const NavStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 315px;
`
export const NavItem = styled.div`
  font-size: 18px;
  color: rgba(30, 30, 30, 0.5);
  font-weight: 500;
  cursor: pointer;

  &: hover {
    color: black;
  }
`

export const UserBlock = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & img {
    cursor: pointer;
  }
`
export const StyledImg = styled.img`
  width: 23px;
`
