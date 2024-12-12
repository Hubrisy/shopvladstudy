import React, { useMemo } from "react"
import { useParams } from "react-router-dom"

import type { CartItem } from "../../context/cart"
import { data } from "../../data"
import { useCart } from "../../hooks/useCart"
import type { Product } from "../../types"
import { ProductUI } from "./ui"

export const ProductPage = () => {
  const params = useParams()
  const item = useMemo(
    () => data.find((item) => item.id === +params.id!),
    [params.id]
  )

  const { addProduct } = useCart()

  const addToCart = () => {
    const newItem: CartItem = { ...(item as Product), amount: 1 }
    addProduct(newItem)
  }

  if (!item) {
    return <h1>Item not found</h1>
  }

  return <ProductUI item={item} onAddToCart={addToCart} />
}
