import React from "react"

import { ModalType, useModalContext } from "../../context/modal"
import Cart from "../../images/logo_block/cart.png"
import User from "../../images/logo_block/user.png"
import { StyledLink } from "../catalog/styled"
import {
  HeaderStyled,
  LogoStyled,
  NavBlock,
  NavItem,
  NavStyled,
  StyledImg,
  UserBlock,
} from "./styled"

export const Header = () => {
  const { setModal } = useModalContext()

  return (
    <HeaderStyled>
      <NavBlock>
        <LogoStyled>GREENMIND</LogoStyled>
        <NavStyled>
          <StyledLink to="/">
            <NavItem>Home</NavItem>
          </StyledLink>
          <NavItem>Products</NavItem>
          <NavItem>Contacts</NavItem>
        </NavStyled>
      </NavBlock>
      <UserBlock>
        <StyledImg
          src={Cart}
          alt="cart"
          onClick={() => setModal(ModalType.cart)}
        />
        <StyledImg src={User} alt="user" />
      </UserBlock>
    </HeaderStyled>
  )
}
