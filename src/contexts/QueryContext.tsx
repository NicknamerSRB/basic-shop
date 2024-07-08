import useQuery, { QueryResult } from '@/hooks/useQuery'
import { GetProductsOptions, Product, getProducts } from '@/services/products'
import { ReactNode, createContext } from 'react'

type QueryContextValue = {
  getShopProductsQuery: QueryResult<GetProductsOptions | undefined, Product[]>
  getConsoleProductsQuery: QueryResult<
    GetProductsOptions | undefined,
    Product[]
  >
}

export const QueryContext = createContext<QueryContextValue>(
  {} as QueryContextValue,
)

type Props = {
  children?: ReactNode
}

export const QueryContextProvider = ({ children }: Props) => {
  const getShopProductsQuery = useQuery({
    fn: getProducts,
  })
  const getConsoleProductsQuery = useQuery({ fn: getProducts })

  const value = {
    getShopProductsQuery,
    getConsoleProductsQuery,
  }

  return <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
}
