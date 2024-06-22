import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'

const useCart = () => {
  try {
    const context = useContext(CartContext)
    return context
  } catch (error) {
    const { message } = error as Error
    throw new Error(message)
  }
}

export { useCart }
