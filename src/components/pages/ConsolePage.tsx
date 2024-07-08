import { useEffect } from 'react'
import Heading from '../ui/Heading'
import Table, { TableConfig } from '../ui/Table'
import { useQuery } from '@/hooks/useQuery'
import { Product } from '@/services/products'
import Checkbox from '../ui/Checkbox'
import DropdownMenu from '../ui/DropdownMenu'
import Button from '../ui/Button'

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
  const { data, error, isLoading, fetchConsoleProducts } = useQuery()

  useEffect(() => {
    fetchConsoleProducts()
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
      {data && (
        <Table
          data={data}
          tableConfig={tableConfig}
          error={error}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}

export default ConsolePage
