import { Product } from '@/services/products'

type QueryReducerState = {
  isLoading: boolean
  error: string
  data: null | Product[]
}

type Action =
  | { type: 'init' }
  | { type: 'error'; payload: string }
  | { type: 'success'; payload: Product[] }

const defaultQueryReducerState: QueryReducerState = {
  isLoading: false,
  error: '',
  data: null,
}

const queryReducer = (
  state: QueryReducerState,
  action: Action,
): QueryReducerState => {
  switch (action.type) {
    case 'init':
      return { isLoading: true, error: '', data: null }
    case 'error':
      return { isLoading: false, error: action.payload, data: null }
    case 'success':
      return { isLoading: false, error: '', data: action.payload }
    default:
      return state
  }
}

export { defaultQueryReducerState, queryReducer }
