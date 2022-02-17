const CartReducer = (state, action) => {
  const actions = {
    TOGGLE_CART: () => ({
      ...state,
      isOpen: !state.isOpen,
    }),
    ADD_PRODUCT: () => ({
      ...state,
      products: [...state.products, action.payload],
    }),
    REMOVE_PRODUCT: () => ({
      ...state,
      products: state.products.filter((product) => product.id !== action.payload),
    }),
    default: () => state,
  }
  return actions[action.type || 'default']()
}

export default CartReducer
