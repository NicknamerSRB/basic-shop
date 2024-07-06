import { useEffect } from 'react'
import BasicError from '../ui/BasicError'
import Checkbox from '../ui/Checkbox'
import DropdownMenu from '../ui/DropdownMenu'
import Heading from '../ui/Heading'
import Table from '../ui/Table'
import Button from '../ui/Button'
import { useQuery } from '@/hooks/useQuery'
import { updateProductAvailability } from '@/services/products'

const ConsolePage = () => {
  const { data, error, isLoading, fetchConsoleProducts } = useQuery()

  useEffect(() => {
    fetchConsoleProducts()
  }, [])

  const handleCheckboxChange = async (
    productId: string,
    currentAvailability: boolean,
  ) => {
    try {
      await updateProductAvailability(productId, !currentAvailability)
      fetchConsoleProducts()
    } catch (error) {
      console.error('Failed to update product availability:', error)
    }
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <BasicError message={error} />
  }

  return (
    <div>
      <Heading>Console Page</Heading>
      {data && (
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>
                  <Checkbox
                    checked={product.availability}
                    onChange={() =>
                      handleCheckboxChange(product.id, product.availability)
                    }
                  />
                </td>
                <td>
                  <DropdownMenu>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  )
}

export default ConsolePage
