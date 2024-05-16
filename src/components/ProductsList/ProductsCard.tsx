import { Product } from '@/services/products'
import Icon from '@/components/ui/Icon'
import Button from '../ui/Button'
import Paragraph from '../ui/Paragraph'

type Props = {
  product: Product
}

const ProductsCard = ({ product }: Props) => {
  return (
    <li key={product.id}>
      <img src={product.image} alt={product.name} />
      <Paragraph>Price: ${product.price}</Paragraph>
      <Paragraph>{product.stockQuantity}</Paragraph>
      <Button>
        Add to Cart
        <Icon name={'Add'} />
      </Button>
    </li>
  )
}

export default ProductsCard
