import React from "react"

import { SliderComponent } from "../../components/slider"
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
        <SliderComponent>
          {item.img.map((img) => (
            <ItemImg src={img} />
          ))}
        </SliderComponent>
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
