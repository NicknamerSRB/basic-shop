import React, { useReducer, useEffect } from 'react'
import { getProducts } from '@/services/products'
import { queryReducer, defaultQueryReducerState } from '@/reducers/queryReducer'

const Shop: React.FC = () => {
  const [state] = useReducer(queryReducer, defaultQueryReducerState)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts()
        console.log(products)
      } catch (error) {
        const err = error as Error
        console.error('Error fetching products:', error)
      }
    }

    fetchData()
  }, [state.defaultGetProductsQuery])

  return <></>
}

export default Shop
