import { CartItemType } from '@/contexts/CartContext'
import CartItem from './CartItem'
// import { CartItem as CartItemType } from '@/reducers/cartReducer';

type Props = {
  cartItems: CartItemType[]
}

const CartList = ({ cartItems }: Props) => {
  return (
    <ul>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default CartList
