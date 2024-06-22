import { createContext, ReactNode, useEffect, useState } from 'react'
import { Product } from '@/services/products'

export type CartItemType = Product & {
  quantity: number
}

type CartContextType = {
  cartItems: CartItemType[]
  cartCount: number
  cartTotal: number
  handleAddItemToCart: (product: Product) => void
  handleRemoveItemFromCart: (product: string) => void
  handleDeleteItemFromCart: (product: string) => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    setCartCount(
      cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0),
    )
    setCartTotal(
      cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0,
      ),
    )
  }, [cartItems])

  const handleAddItemToCart = (product: Product) => {
    const isItemInCart = cartItems.some((cartItem) => {
      return cartItem.id === product.id
    })
    if (!isItemInCart) {
      setCartItems((pV) => [...pV, { ...product, quantity: 1 }])
    } else {
      setCartItems((pV) => {
        return pV.map((cartItem) =>
          product.id === cartItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        )
      })
    }
  }

  const handleRemoveItemFromCart = (product: string) => {
    const isLastItemInCart =
      cartItems.find((cartItem) => cartItem.id === product)?.quantity === 1
    if (!isLastItemInCart) {
      setCartItems((pV) =>
        pV.map((cartItem) =>
          cartItem.id === product
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
      )
    } else {
      setCartItems((pV) => pV.filter((cartItem) => cartItem.id !== product))
    }
  }

  const handleDeleteItemFromCart = (product: string) => {
    setCartItems((pV) => pV.filter((cartItem) => cartItem.id !== product))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        handleAddItemToCart,
        handleRemoveItemFromCart,
        handleDeleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }
