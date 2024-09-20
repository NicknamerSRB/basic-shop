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
import AddProductForm from '../Forms/AddProductForm'
import EditProductForm from '../Forms/EditProductForm'

const ConsolePage = () => {
  const { getConsoleProductsQuery, deleteProductQuery } = useQueryContext()
  const [searchQuery, setSearchQuery] = useState('')
  const [productToEdit, setProductToEdit] = useState<Product | null>(null)

  const handleDeleteProduct = (data: Product) => {
    deleteProductQuery.fetch(
      { id: data.id },
      {
        onSuccess: () => {
          getConsoleProductsQuery.update(
            (products) =>
              products?.filter((product) => product.id !== data.id) || products,
          )
        },
        onError: () => {
          console.log('Error deleting product')
        },
      },
    )
  }

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
          label="Availability"
          defaultChecked={data.availability}
          onChange={() => {
            // TO DO
          }}
        />
      ),
    },

    {
      label: 'Actions',
      component: ({ data }) => (
        <DropdownMenu trigger="Actions">
          <Dialog
            triggerLabel="Edit"
            onOpen={() => setProductToEdit(data)}
            onClose={() => setProductToEdit(null)}
          >
            <Heading>Edit Product</Heading>
            {productToEdit && <EditProductForm productToEdit={productToEdit} />}
          </Dialog>
          <Button onClick={() => handleDeleteProduct(data)}>Delete</Button>
        </DropdownMenu>
      ),
    },
  ]

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
        <AddProductForm />
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
