import React, { useMemo } from "react"
import { useParams } from "react-router-dom"

import { data } from "../../data"
import { ProductUI } from "./ui"

export const Product = () => {
  const params = useParams()
  const item = useMemo(
    () => data.find((item) => item.id === params.id!),
    [params.id]
  )

  const onAddToCart = () => {
    alert("add")
  }

  if (!item) {
    return <h1>Item not found</h1>
  }

  return <ProductUI item={item} onAddToCart={onAddToCart} />
}
