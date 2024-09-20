import { Query, jsonApi } from '@/services/jsonApi'

const END_POINT = '/products'

type ProductCategory =
  | 'Shoes'
  | 'Clothing'
  | 'Pants'
  | 'Accessories'
  | 'Hats'
  | 'Eyewear'
  | 'Jewelry'
  | 'Bags'

export const productCategories: ProductCategory[] = [
  'Shoes',
  'Clothing',
  'Pants',
  'Accessories',
  'Hats',
  'Eyewear',
  'Jewelry',
  'Bags',
]

type ProductColor =
  | 'Black'
  | 'Gray'
  | 'Blue'
  | 'Brown'
  | 'Red'
  | 'Tortoiseshell'
  | 'Navy'
  | 'Gold'

export const productColors: ProductColor[] = [
  'Black',
  'Gray',
  'Blue',
  'Brown',
  'Red',
  'Tortoiseshell',
  'Navy',
  'Gold',
]

type ProductFeature =
  | 'Breathable mesh'
  | 'Cushioned sole'
  | 'Soft wool blend'
  | 'Ribbed cuffs'
  | 'Embroidered logo'
  | 'Adjustable strap'
  | 'Oversized frame'
  | 'Gradient lenses'

export type Product = {
  availability: boolean
  category: ProductCategory
  color: ProductColor
  description: string
  features: ProductFeature[]
  id: string
  image: string
  name: string
  price: number
  stockQuantity: number
}

export type AddProductOptions = {
  payload: {
    availability: boolean
    category: string
    color: string
    description?: string
    image: string
    name: string
    price: number
    stockQuantity: number
  }
}

export type GetProductsOptions = {
  query?: Query & Partial<Product>
}

export const getProducts = (options?: GetProductsOptions) => {
  const { query } = options || {}
  return jsonApi<Product[]>({ endpoint: END_POINT, query: query })
}

export const addProduct = (options: AddProductOptions) => {
  const { payload } = options
  return jsonApi<Product>({
    endpoint: '/products',
    init: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  })
}
