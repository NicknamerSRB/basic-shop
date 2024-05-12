import { useReducer, useEffect } from 'react'
import { getProducts } from '@/services/products'
import { queryReducer, defaultQueryReducerState } from '@/reducers/queryReducer'

const Shop = () => {
  const [state, dispatch] = useReducer(queryReducer, defaultQueryReducerState)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'init' })
      try {
        const products = await getProducts()
        dispatch({ type: 'success', payload: products })
      } catch (error) {
        const { message } = error as Error
        dispatch({ type: 'error', payload: message })
      }
    }

    fetchData()
  }, [])
  console.log(state)

  return <></>
}

export default Shop
