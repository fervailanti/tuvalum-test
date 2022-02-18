import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from '../../components'
import { CartContext } from '../../contexts/cart'
import { endpoints } from '../../services/axios'
import { checkAddedProduct, formatCurrency } from '../../utils'

const ProductsWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 1.5em;
  align-items: center;
  justify-content: center;
  padding: 1.5em;
  flex-wrap: wrap;
  max-width: 1280px;
`

const Products = () => {
  const [state, dispatch] = useContext(CartContext)
  const [products, setProducts] = useState([])

  useEffect(() => {
    endpoints.getProducts().then(({ data }) => {
      setProducts(data)
    })
  })

  return (
    <ProductsWrapper>
      {products.map((product) => {
        const isAdded = checkAddedProduct(state.products, product.id)
        const addToCart = () => dispatch({ type: 'ADD_CART_PRODUCT', payload: product })
        return (
          <Card
            key={product.id}
            image={product.image}
            caption={product.year || 'Unknow year'}
            title={product.title}
            subtitle={formatCurrency(product.price)}
            actionLabel={isAdded ? 'Added' : 'Add'}
            actionIcon="AddShoppingCart"
            actionDisabled={isAdded}
            onClick={addToCart}
          />
        )
      })}
    </ProductsWrapper>
  )
}

export default Products
