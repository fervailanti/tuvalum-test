const CartReducer = (state, action) => {
  const actions = {
    OPEN_CART: () => ({
      ...state,
      isOpen: true,
    }),
    CLOSE_CART: () => ({
      ...state,
      isOpen: false,
    }),
    ADD_CART_PRODUCT: () => ({
      ...state,
      products: [...state.products, action.payload],
    }),
    REMOVE_CART_PRODUCT: () => ({
      ...state,
      products: state.products.filter((product) => product.id !== action.payload),
    }),
    REMOVE_ALL_PRODUCTS: () => ({
      ...state,
      products: [],
    }),
    default: () => state,
  }
  return actions[action.type || 'default']()
}

export default CartReducer
