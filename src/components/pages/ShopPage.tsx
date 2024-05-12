import { useEffect, useContext } from 'react'
import { getProducts } from '@/services/products'
import { QueryContext } from '@/contexts/QueryContext'

const Shop = () => {
  const [state, dispatch] = useContext(QueryContext)

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
