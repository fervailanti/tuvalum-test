import { useContext } from 'react'
import styled from 'styled-components'
import { Button, Chip, Icon, P } from '../../components'
import { CartContext } from '../../contexts/cart'
import { formatCurrency, getPriceSumFromProducts } from '../../utils'
import EmptyState from './EmptyState'

const CartWrapper = styled.div`
  z-index: 20;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
  width: 24em;
  background-color: #06e494;
  padding: 1.25em;
  transition: margin-right 0.5s ease;
  margin-right: ${(props) => (props.isOpen ? '0' : '-26.5em')};
`

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1em;
`

const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 1.5em 0;
  flex-direction: column;
  gap: 0.75em;
`

const Footer = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  justify-content: center;
  border-top: solid 1px white;
  padding-top: 1.5em;
  padding-bottom: 0.5em;
  gap: 0.5em;
`

const Cart = () => {
  const [state, dispatch] = useContext(CartContext)

  const closeCart = () => dispatch({ type: 'CLOSE_CART' })

  const removeAllProducts = () => dispatch({ type: 'REMOVE_ALL_PRODUCTS' })

  const renderCartProducts = () =>
    state.products.map((product) => {
      const removeFromCart = () => dispatch({ type: 'REMOVE_CART_PRODUCT', payload: product.id })
      return (
        <Chip
          key={product.id}
          image={product.image}
          caption={product.year || 'Unknow year'}
          title={product.title}
          subtitle={formatCurrency(product.price)}
          actionIcon="DeleteOutlined"
          onClick={removeFromCart}
        />
      )
    })

  const total = getPriceSumFromProducts(state.products)

  const isEmpty = state.products.length === 0

  return (
    <CartWrapper isOpen={state.isOpen}>
      <Header>
        <Icon name="ArrowForward" color="white" onClick={closeCart} cursor="pointer" />
        <P size="sm" color="white">
          Shopping Cart
        </P>
      </Header>
      <Content>
        {!isEmpty && (
          <Button icon="DeleteSweep" textSize="sm" align="flex-end" onClick={removeAllProducts}>
            Clear All
          </Button>
        )}
        {isEmpty ? <EmptyState /> : renderCartProducts()}
      </Content>
      <Footer>
        <P color="white" size="md">
          Total:
        </P>
        <P color="white" size="md" bold>
          {formatCurrency(total)}
        </P>
      </Footer>
    </CartWrapper>
  )
}

export default Cart
