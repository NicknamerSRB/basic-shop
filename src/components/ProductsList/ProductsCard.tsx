import { Product } from '@/services/products'
import Icon from '@/components/ui/Icon'
import Button from '../ui/Button'
import Paragraph from '../ui/Paragraph'
import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'

type Props = {
  product: Product
}

const ProductsCard = ({ product }: Props) => {
  const cart = useContext(CartContext)
  return (
    <li key={product.id}>
      <img src={product.image} alt={product.name} />
      <Paragraph>Price: ${product.price}</Paragraph>
      <Paragraph>{product.stockQuantity}</Paragraph>
      <Button onClick={() => cart.handleAddItemToCart(product)}>
        Add to Cart
        <Icon name={'Add'} />
      </Button>
    </li>
  )
}

export default ProductsCard
