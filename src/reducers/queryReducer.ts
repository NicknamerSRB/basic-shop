type QueryReducerState = {
  defaultGetProductsQuery: string
}

type Action = { type: 'UPDATE_DEFAULT_QUERY'; payload: string }

const defaultQueryReducerState: QueryReducerState = {
  defaultGetProductsQuery: '',
}

const queryReducer = (
  state: QueryReducerState,
  action: Action,
): QueryReducerState => {
  switch (action.type) {
    case 'UPDATE_DEFAULT_QUERY':
      return { ...state, defaultGetProductsQuery: action.payload }

    default:
      return state
  }
}

export { defaultQueryReducerState, queryReducer }
