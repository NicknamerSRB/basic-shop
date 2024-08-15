import { Product } from './products'

const BASE_URL = 'http://localhost:3000'

const getQueryParams = (query?: Query) => {
  if (!query) return ''
  const filteredQuery = Object.fromEntries(
    Object.entries(query).filter(([, v]) => v !== ''),
  )
  if (Object.keys(filteredQuery).length === 0) return ''

  return `?${Object.entries(filteredQuery)
    .map(([key, value]) => `${key}=${value}`, [])
    .join('&')}`
}

export type Query = {
  name_like: string
}

type JsonApiProps = {
  endpoint: string
  init?: RequestInit
  query?: Query
  baseurl?: string
}

const jsonApi = async <JsonApiResponse>({
  endpoint,
  init,
  query,
  baseurl = BASE_URL,
}: JsonApiProps): Promise<JsonApiResponse> => {
  try {
    const response = await fetch(
      `${baseurl}${endpoint}${getQueryParams(query)}`,
      init,
    )
    const data = await response.json()
    return data
  } catch (error) {
    return Promise.reject(error)
  }
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

export { jsonApi }
