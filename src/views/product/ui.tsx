import React from "react"

import type { Product } from "../../types"
import {
  AddToCartBtn,
  BtnBlock,
  ItemDescription,
  ItemDescriptionBlock,
  ItemImg,
  ItemImgBlock,
  ItemPrice,
  ItemStyledContainer,
  ItemTitle,
} from "./styled"

interface Props {
  item: Product
  onAddToCart: () => void
}

export const ProductUI: React.FC<Props> = ({ item, onAddToCart }) => {
  return (
    <ItemStyledContainer>
      <ItemImgBlock>
        <ItemImg src={item?.img} />
        <ItemPrice>{item.price}$</ItemPrice>
      </ItemImgBlock>
      <ItemDescriptionBlock>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemDescription>{item.description}</ItemDescription>
        <BtnBlock>
          <AddToCartBtn type="button" onClick={onAddToCart}>
            Add to cart
          </AddToCartBtn>
        </BtnBlock>
      </ItemDescriptionBlock>
    </ItemStyledContainer>
  )
}
