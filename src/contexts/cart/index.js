import React, { createContext, useReducer } from 'react'
import CartReducer from './reducer'

const initialState = {
  isOpen: false,
  products: [],
}

export const CartContext = createContext(initialState)

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)
  return <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>
}

export default CartProvider
