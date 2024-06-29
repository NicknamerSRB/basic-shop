import Drawer from '@/components/ui/Drawer'
import { useCart } from '@/hooks/useCart'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/Button'
import CartList from './CartList'
import useScreen from '@/hooks/useScreen'
import ShoppingBag from '@/assets/ShoppingBag.svg?react'

const Cart = () => {
  const { cartTotal } = useCart()
  const { isMobile } = useScreen()
  return (
    <Drawer
      trigger={
        <ShoppingBag
          href="/cart"
          className="absolute right-6 hover:bg-gray-400"
        />
      }
      header={<Heading>Cart Items</Heading>}
      footer={<Button>Total: ${cartTotal}</Button>}
      anchor={isMobile ? 'bottom' : 'right'}
    >
      <CartList />
    </Drawer>
  )
}

export default Cart
