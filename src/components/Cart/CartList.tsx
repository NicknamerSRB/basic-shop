import CartItem from './CartItem'
import { useCart } from '@/hooks/useCart'

const CartList = () => {
  const { cartItems } = useCart()

  return (
    <ul>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default CartList
