import { useEffect, useContext } from 'react'
import { QueryContext } from '@/contexts/QueryContext'

const Shop = () => {
  const query = useContext(QueryContext)

  useEffect(() => {
    query.fetch()
  }, [])

  console.log(query)

  return <></>
}

export default Shop
