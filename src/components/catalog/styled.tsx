import { Link } from "react-router-dom"
import styled from "styled-components"

export const CatalogStyled = styled.div`
  margin: 100px auto 50px;
  max-width: 1050px;
  display: flex;
  justify-content: space-between;
`
export const CatalogItem = styled.div`
  width: 300px;
  cursor: pointer;
`
export const CatalogImg = styled.img`
  width: 300px;
  height: 400px;
`
export const CatalogItemName = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
`
export const CatalogItemPrice = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: rgba(30, 30, 30, 0.5);
  margin-top: 5px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`
