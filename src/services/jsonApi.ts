const BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_JSON_API_URL_PROD
  : import.meta.env.VITE_JSON_API_URL_DEV

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

export { jsonApi }
