import { useEffect } from 'react'
import { useQuery } from '@/hooks/useQuery'

const Shop = () => {
  const query = useQuery()

  useEffect(() => {
    query.fetch()
  }, [])

  console.log(query)

  return <></>
}

export default Shop
