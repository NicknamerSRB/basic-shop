import { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../ui/Button'
import Checkbox from '../ui/Checkbox'
import NumberInput from '../ui/NumberInput'
import TextArea from '../ui/TextArea'
import TextInput from '../ui/TextInput'
import RadioGroup from '../ui/RadioGroup'
import { getInputOptions } from '@/utils/array'
import { productCategories, productColors } from '@/services/products'
import Select from '../ui/Select'

const defaultFormValues = {
  availability: false,
  category: '',
  color: '',
  description: '',
  image: '',
  name: '',
  price: 0,
  stockQuantity: 0,
}

const categoryOptions = getInputOptions(productCategories)
const colorOptions = getInputOptions(productColors)

const AddProductForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues)

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //TODO
    console.log(formValues)
  }

  const handleClearForm = () => {
    setFormValues(defaultFormValues)
  }

  const handleChangeForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <form className="p-4" onSubmit={handleSubmitForm}>
      <div className="flex flex-col gap-2">
        <TextInput
          label="Name"
          placeholder="Product name"
          required
          name="name"
          value={formValues.name}
          onChange={handleChangeForm}
        />
        <TextArea
          label="Description"
          placeholder="Product description"
          name="description"
          value={formValues.description}
          onChange={handleChangeForm}
        />
        <TextInput
          label="Image url"
          placeholder="https://example.com"
          required
          name="image"
          value={formValues.image}
          onChange={handleChangeForm}
        />
        <div className="gap-4 lg:flex">
          <NumberInput
            className="lg:w-1/2"
            label="Price"
            placeholder="1234"
            required
            name="price"
            value={formValues.price}
            onChange={handleChangeForm}
          />
          <NumberInput
            className="lg:w-1/2"
            label="Stock Quantity"
            placeholder="1234"
            required
            name="stockQuantity"
            value={formValues.stockQuantity}
            onChange={handleChangeForm}
          />
        </div>
        <RadioGroup
          label="Category"
          name="category"
          onChange={handleChangeForm}
          options={categoryOptions}
          required
        />

        <Select
          label="Colors"
          name="color"
          options={colorOptions}
          value={formValues.color}
          onChange={handleChangeForm}
          required
        />
        <Checkbox
          label="Is Available"
          name="availability"
          checked={formValues.availability}
          onChange={handleChangeForm}
        />
      </div>
      <div className="mt-4 flex items-center justify-end gap-4">
        <Button type="submit">Add</Button>
        <Button type="button" onClick={handleClearForm}>
          Clear
        </Button>
      </div>
    </form>
  )
}

export default AddProductForm
