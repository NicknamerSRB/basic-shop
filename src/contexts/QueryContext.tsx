import {
  queryReducer,
  defaultQueryReducerState,
  QueryReducerState,
} from '@/reducers/queryReducer'
import {
  GetAllProductsOptions,
  Product,
  getProducts,
} from '@/services/products'
import { ReactNode, createContext, useReducer } from 'react'

type QueryState = QueryReducerState & {
  fetch: (props?: {
    options?: {
      query: Pick<
        Required<GetAllProductsOptions>['query'],
        'availability' | 'name_like'
      >
    }
    onSuccess?: (data: Product[]) => void
    onError?: (error: string) => void
  }) => Promise<void>
  fetchConsoleProducts: () => Promise<void>
}

const QueryContext = createContext<QueryState>({} as QueryState)

type Prop = { children?: ReactNode }

const QueryContextProvider = ({ children }: Prop) => {
  const [state, dispatch] = useReducer(queryReducer, defaultQueryReducerState)

  const queryState: QueryState = {
    ...state,
    fetch: async (props) => {
      const { options, onSuccess, onError } = props || {}
      try {
        dispatch({ type: 'init' })
        const data = await getProducts(options)
        dispatch({ type: 'success', payload: data })
        onSuccess?.(data)
      } catch (error) {
        const { message } = error as Error
        dispatch({
          type: 'error',
          payload: message,
        })
        onError?.(message)
      }
    },
    fetchConsoleProducts: async () => {
      try {
        dispatch({ type: 'getConsoleProductsInit' })
        const data = await getProducts()
        dispatch({ type: 'getConsoleProductsSuccess', payload: data })
      } catch (error) {
        const { message } = error as Error
        dispatch({
          type: 'getConsoleProductsError',
          payload: message,
        })
      }
    },
  }
  return (
    <QueryContext.Provider value={queryState}>{children}</QueryContext.Provider>
  )
}

export { QueryContext, QueryContextProvider }
