import Button from '../ui/Button'
import Checkbox from '../ui/Checkbox'
import NumberInput from '../ui/NumberInput'
import TextArea from '../ui/TextArea'
import TextInput from '../ui/TextInput'
import RadioGroup from '../ui/RadioGroup'
import { getInputOptions } from '@/utils/array'
import {
  AddProductOptions,
  productCategories,
  productColors,
} from '@/services/products'
import Select from '../ui/Select'
import { useQueryContext } from '@/hooks/useQueryContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { boolean, number, object, string } from 'yup'

const schema = object({
  availability: boolean().required(),
  category: string().required(),
  color: string().required(),
  description: string(),
  image: string().required(),
  name: string().required(),
  price: number().min(1).required(),
  stockQuantity: number().min(1).required(),
})

const defaultValues = {
  availability: false,
  category: '',
  color: '',
  description: '',
  image: '',
  name: '',
  price: 0,
  stockQuantity: 0,
}

type FormValues = AddProductOptions['payload']
const categoryOptions = getInputOptions(productCategories)
const colorOptions = getInputOptions(productColors)

const AddProductForm = () => {
  const { addProductQuery, getConsoleProductsQuery } = useQueryContext()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const onValid = (formValues: FormValues) => {
    addProductQuery.fetch(
      { payload: formValues },
      {
        onSuccess: (addedProduct) => {
          getConsoleProductsQuery.update((products) =>
            products ? [...products, addedProduct] : [addedProduct],
          )
          reset(defaultValues)
          console.log(`Successfully added product ${addedProduct.name}`)
        },
        onError: () => {
          console.log('Failed to add product')
        },
      },
    )
  }

  const handleClearForm = () => {
    reset(defaultValues)
  }

  return (
    <form className="p-4" onSubmit={handleSubmit(onValid)}>
      <div className="flex flex-col gap-2">
        <TextInput
          label="Name"
          placeholder="Product name"
          required
          {...register('name')}
          error={errors.description?.message}
          disabled={addProductQuery.isLoading}
        />
        <TextArea
          label="Description"
          placeholder="Product description"
          {...register('description')}
          disabled={addProductQuery.isLoading}
        />
        <TextInput
          label="Image url"
          placeholder="https://example.com"
          required
          {...register('image')}
          error={errors.description?.message}
          disabled={addProductQuery.isLoading}
        />
        <div className="gap-4 lg:flex">
          <NumberInput
            className="lg:w-1/2"
            label="Price"
            placeholder="1234"
            required
            {...register('price')}
            error={errors.description?.message}
            disabled={addProductQuery.isLoading}
          />
          <NumberInput
            className="lg:w-1/2"
            label="Stock Quantity"
            placeholder="1234"
            required
            {...register('stockQuantity')}
            error={errors.description?.message}
            disabled={addProductQuery.isLoading}
          />
          s
        </div>
        <RadioGroup
          label="Category"
          options={categoryOptions}
          {...register('category')}
          error={errors.description?.message}
          disabled={addProductQuery.isLoading}
          required
        />

        <Select
          label="Colors"
          options={colorOptions}
          {...register('color')}
          error={errors.description?.message}
          disabled={addProductQuery.isLoading}
          required
        />
        <Checkbox
          label="Is Available"
          {...register('availability')}
          error={errors.description?.message}
          disabled={addProductQuery.isLoading}
        />
      </div>
      <div className="mt-4 flex items-center justify-end gap-4">
        <Button type="submit" disabled={addProductQuery.isLoading}>
          Add
        </Button>
        <Button
          type="button"
          onClick={handleClearForm}
          disabled={addProductQuery.isLoading}
        >
          Clear
        </Button>
      </div>
    </form>
  )
}

export default AddProductForm
