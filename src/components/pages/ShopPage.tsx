import { ChangeEvent, useEffect, useState } from 'react'
import { useQuery } from '@/hooks/useQuery'
import ProductsList from '../ProductsList/ProductsList'
import Heading from '../ui/Heading'
import Icon from '@/components/ui/Icon'

const Shop = () => {
  const query = useQuery()
  const [searchedProduct, setSearchedProduct] = useState('')

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchedProduct(event.target.value)
  }
  useEffect(() => {
    query.fetch({
      options: {
        query: { name_like: searchedProduct, availability: true },
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedProduct])

  return (
    <div className="container mx-auto px-4">
      <Heading>Products</Heading>
      <div className="mb-4 flex items-center">
        <div className="rounded-l-md border border-r-0 border-gray-300 bg-gray-200 p-2">
          <Icon name="Search" />
        </div>
        <input
          type="text"
          value={searchedProduct}
          onChange={handleSearch}
          placeholder="Search for products..."
          className="flex-1 rounded-r-md border border-gray-300 p-2"
        />
      </div>
      <ProductsList products={query.data || []} />
    </div>
  )
}

export default Shop
