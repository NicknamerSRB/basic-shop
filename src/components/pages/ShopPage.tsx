import { Product, getProducts } from '@/services/products'
import { useState, useEffect } from 'react'

type GetProductsQuery = {
  isLoading: boolean
  error: string
  data: Product[] | null
}

const ShopPage = () => {
  const [getProductsQuery, setGetProductsQuery] = useState<GetProductsQuery>({
    isLoading: false,
    error: '',
    data: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      setGetProductsQuery({
        isLoading: true,
        error: '',
        data: null,
      })

      try {
        const products = await getProducts()
        setGetProductsQuery({
          isLoading: false,
          error: '',
          data: products,
        })
      } catch (error) {
        setGetProductsQuery({
          isLoading: false,
          error: 'Products not fetch',
          data: null,
        })
      }
    }
    fetchData()
  }, [])
  console.log(getProductsQuery)

  return <></>
}

export default ShopPage
