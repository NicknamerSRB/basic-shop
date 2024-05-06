export const END_POINT = '/products'
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
