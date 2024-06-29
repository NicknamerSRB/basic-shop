import { Products } from '@/services/products'
import ProductsCard from './ProductsCard'

type Props = {
  products: Products[]
}

const ProductsList = ({ products }: Props) => {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default ProductsList
