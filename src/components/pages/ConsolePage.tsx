import { useEffect } from 'react'
import Heading from '../ui/Heading'
import Table, { TableConfig } from '../ui/Table'
import { Product } from '@/services/products'
import Checkbox from '../ui/Checkbox'
import DropdownMenu from '../ui/DropdownMenu'
import Button from '../ui/Button'
import { useQueryContext } from '@/hooks/useQueryContext'

const tableConfig: TableConfig<Product> = [
  { label: 'Product Name', field: 'name' },
  { label: 'Category', field: 'category' },
  { label: 'Color', field: 'color' },
  { label: 'Price', field: 'price' },
  { label: 'Quantity', field: 'stockQuantity' },
  {
    label: 'Availability',
    component: ({ data }) => (
      <Checkbox
        defaultChecked={data.availability}
        onChange={() => {
          // TO DO
        }}
      />
    ),
  },

  {
    label: 'Actions',
    component: () => (
      <DropdownMenu trigger="Actions">
        <Button
          onClick={() => {
            // TO DO
          }}
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            // TO DO
          }}
        >
          Delete
        </Button>
      </DropdownMenu>
    ),
  },
]

const ConsolePage = () => {
  const { getConsoleProductsQuery } = useQueryContext()

  useEffect(() => {
    getConsoleProductsQuery.fetch({})
  }, [])

  // const handleCheckboxChange = async (
  //   productId: string,
  //   currentAvailability: boolean,
  // ) => {
  //   try {
  //     await updateProductAvailability(productId, !currentAvailability)
  //     fetchConsoleProducts()
  //   } catch (error) {
  //     console.error('Failed to update product availability:', error)
  //   }
  // }

  return (
    <div>
      <Heading>Console Page</Heading>
      <Table
        data={getConsoleProductsQuery.data}
        tableConfig={tableConfig}
        error={getConsoleProductsQuery.error}
        isLoading={getConsoleProductsQuery.isLoading}
      />
    </div>
  )
}

export default ConsolePage
