import Drawer from '@/components/ui/Drawer'
import { useCart } from '@/hooks/useCart'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/Button'
import CartList from './CartList'
import useScreen from '@/hooks/useScreen'

const Cart = () => {
  const { cartTotal, cartItems } = useCart()
  const { isMobile } = useScreen()
  console.log(cartItems)
  return (
    <Drawer
      trigger={<Button>Open Cart</Button>}
      header={<Heading>Cart Items</Heading>}
      footer={<Button>Total: ${cartTotal}</Button>}
      anchor={isMobile ? 'bottom' : 'right'}
    >
      <CartList cartItems={cartItems} />
    </Drawer>
  )
}

export default Cart
