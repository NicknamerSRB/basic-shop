import { useEffect, useState } from 'react'
import { useQuery } from '@/hooks/useQuery'
import { Products } from '@/services/products'
import ProductsList from '../ProductsList/ProductsList'
import Heading from '../ui/Heading'
import Cart from '@/components/Cart/Cart'

const Shop = () => {
  const query = useQuery()
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    query.fetch({
      onSuccess: (products) => {
        const availableProducts = products.filter(
          (product) => product.availability,
        )
        setProducts(availableProducts)
      },
    })
  }, [])

  return (
    <div className="container mx-auto px-4">
      <Heading>Products</Heading>
      <ProductsList products={products} />
      <Cart />
    </div>
  )
}

export default Shop
