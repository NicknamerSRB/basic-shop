import { useEffect, useState } from 'react'
import { useQuery } from '@/hooks/useQuery'
import { Product } from '@/services/products'

const Shop = () => {
  const query = useQuery()
  const [products, setProducts] = useState<Product[]>([])

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

  console.log(products)

  return <></>
}

export default Shop
