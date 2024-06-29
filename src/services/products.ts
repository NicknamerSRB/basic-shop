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

type ProductColor =
  | 'Black'
  | 'Gray'
  | 'Blue'
  | 'Brown'
  | 'Red'
  | 'Tortoiseshell'
  | 'Navy'
  | 'Gold'

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

export type GetAllProductsOptions = {
  query?: Query & Partial<Product>
}

export const getProducts = (options?: GetAllProductsOptions) => {
  const { query } = options || {}
  return jsonApi<Product[]>({ endpoint: END_POINT, query: query })
}
