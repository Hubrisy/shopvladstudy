import React from "react"

import { data } from "../../data"
import { Routes } from "../../routes"
import {
  CatalogImg,
  CatalogItem,
  CatalogItemName,
  CatalogItemPrice,
  CatalogStyled,
  StyledLink,
} from "./styled"

export const Catalog = () => {
  return (
    <CatalogStyled>
      {data.map((item) => (
        <CatalogItem key={item.id}>
          <StyledLink to={`${Routes.product}/${item.id}`}>
            <CatalogImg src={item.titleImg} />
            <CatalogItemName>{item.title}</CatalogItemName>
            <CatalogItemPrice>{item.price}$</CatalogItemPrice>
          </StyledLink>
        </CatalogItem>
      ))}
    </CatalogStyled>
  )
}
