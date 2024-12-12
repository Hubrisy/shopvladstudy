import type { CartItem } from "../context/cart"
import { useCartContext } from "../context/cart"
import { ModalType, useModalContext } from "../context/modal"

export const useCart = () => {
  const { cart, setCart } = useCartContext()
  const { setModal } = useModalContext()

  const addProduct = (cartItem: CartItem) => {
    const isProductExist: boolean = cart.some((item) => {
      return item.id === cartItem.id
    })

    if (!isProductExist) {
      setCart((prev) => [...prev, cartItem])
    }

    setModal(ModalType.cart)
  }

  const removeProduct = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const updateProduct = (id: number, newQuantity: number) => {
    if (newQuantity < 1 || newQuantity > 10) {
      return
    }

    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: newQuantity,
          }
        }

        return item
      })
    )
  }

  return { addProduct, removeProduct, updateProduct }
}
