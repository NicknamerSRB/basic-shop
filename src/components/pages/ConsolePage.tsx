import { useEffect, useState } from 'react'
import Heading from '../ui/Heading'
import Table, { TableConfig } from '../ui/Table'
import { Product } from '@/services/products'
import Checkbox from '../ui/Checkbox'
import DropdownMenu from '../ui/DropdownMenu'
import Button from '../ui/Button'
import { useQueryContext } from '@/hooks/useQueryContext'
import TextField from '../ui/TextField'
import Dialog from '../ui/Dialog'

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
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getConsoleProductsQuery.fetch({
      query: { name_like: searchQuery },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  return (
    <div>
      <Heading>Console Page</Heading>
      <TextField
        label="Search Products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter product name"
      />
      <Dialog triggerLabel="Add">
        <Heading>Add New Product</Heading>
      </Dialog>
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
