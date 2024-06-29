import Button from '@/components/ui/Button'
import { CartContext, CartItemType } from '@/contexts/CartContext'
import { useContext } from 'react'

type Props = {
  item: CartItemType
}

const CartItem = ({ item }: Props) => {
  const {
    handleAddItemToCart,
    handleRemoveItemFromCart,
    handleDeleteItemFromCart,
  } = useContext(CartContext)

  return (
    <li>
      <img src={item.image} alt={item.name} />
      <div>{item.name}</div>
      <div>${item.price}</div>
      <div>Quantity: {item.quantity}</div>
      <div>Stock Quantity: {item.stockQuantity}</div>
      <Button onClick={() => handleAddItemToCart(item)}>+</Button>
      <Button onClick={() => handleRemoveItemFromCart(item.id)}>-</Button>
      <Button onClick={() => handleDeleteItemFromCart(item.id)}>Delete</Button>
    </li>
  )
}
export default CartItem
