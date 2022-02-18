import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card, Pagination } from '../../components'
import { CartContext } from '../../contexts/cart'
import { endpoints } from '../../services/axios'
import { checkAddedProduct, formatCurrency } from '../../utils'

const ProductsWrapper = styled.div`
  align-content: flex-start;
  width: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  @media (min-width: 640px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1280px;
    padding: 24px;
    gap: 24px;
  }
`

const Products = () => {
  const [state, dispatch] = useContext(CartContext)
  const [products, setProducts] = useState([])
  const [visibleProducts, setVisibleProducts] = useState([])

  useEffect(() => {
    endpoints.getProducts().then(({ data }) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      <Pagination data={products} setItems={setVisibleProducts} />
      <ProductsWrapper>
        {visibleProducts.map((product) => {
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
    </>
  )
}

export default Products
