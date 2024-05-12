import { queryReducer, defaultQueryReducerState } from '@/reducers/queryReducer'
import { ReactNode, createContext, useReducer } from 'react'

const QueryContext = createContext({})

type Prop = { children?: ReactNode }

const QueryContextProvider = ({ children }: Prop) => {
  const [state, dispatch] = useReducer(queryReducer, defaultQueryReducerState)
  const queryState = { state, dispatch }
  return (
    <QueryContext.Provider value={queryState}>{children}</QueryContext.Provider>
  )
}

export { QueryContext, QueryContextProvider }
