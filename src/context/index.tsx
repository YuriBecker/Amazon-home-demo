import React, { createContext, useReducer, Dispatch } from 'react'
import { Product } from '../interfaces/Product'
import { productReducer, ProductActions } from '../reducers'

const initialState: Product[] = []

const AppContext = createContext<{
  state: Product[]
  dispatch: Dispatch<ProductActions>
}>({
  state: initialState,
  dispatch: () => null
})

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
