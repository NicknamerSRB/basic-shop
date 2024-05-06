import { jsonApi } from '@/services/jsonApi'
import { END_POINT, Product } from '@/services/products'
import { useState, useEffect } from 'react'

type GetProductsQuery = {
  isLoading: boolean
  error: string
  data: Product[] | null
}

const getProducts = (): Promise<Product[]> => {
  return jsonApi<Product[]>({ endpoint: END_POINT })
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
        const products: Product[] = await getProducts()
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
