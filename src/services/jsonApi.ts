const BASE_URL = 'http://localhost:3000'
type JsonApiProps = {
  endpoint: string
  init?: RequestInit
  query?: string
  baseurl?: string
}
const jsonApi = async <JsonApiResponse>({
  endpoint,
  init,
  query = '',
  baseurl = BASE_URL,
}: JsonApiProps): Promise<JsonApiResponse> => {
  try {
    const response = await fetch(`${baseurl}${endpoint}${query}`, init)
    const data = await response.json()
    return data
  } catch (error) {
    return Promise.reject(error)
  }
}

export { jsonApi }
