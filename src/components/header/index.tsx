import React from "react"

import { useCartContext } from "../../context/cart"
import { ModalType, useModalContext } from "../../context/modal"
import Cart from "../../images/logo_block/cart.png"
import User from "../../images/logo_block/user.png"
import { Routes } from "../../routes"
import { StyledLink } from "../catalog/styled"
import {
  CartHaveItem,
  CartImgBlock,
  HeaderContainer,
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
  const { cart } = useCartContext()

  return (
    <HeaderContainer>
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
          <CartImgBlock>
            {cart.length > 0 && <CartHaveItem />}
            <StyledImg
              src={Cart}
              alt="cart"
              onClick={() => setModal(ModalType.cart)}
            />
          </CartImgBlock>
          <StyledLink to={Routes.login}>
            <StyledImg src={User} alt="user" />
          </StyledLink>
        </UserBlock>
      </HeaderStyled>
    </HeaderContainer>
  )
}
