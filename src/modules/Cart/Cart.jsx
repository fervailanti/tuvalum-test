import { useContext } from 'react'
import styled from 'styled-components'
import { Button, Chip, Icon, P } from '../../components'
import { CartContext } from '../../contexts/cart'
import { formatCurrency, getPriceSumFromProducts } from '../../utils'
import colors from '../../utils/constants'
import EmptyState from './EmptyState'

const CartWrapper = styled.div`
  z-index: 40;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};
  overflow-y: auto;
  width: stretch;
  position: fixed;
  top: 72px;
  bottom: 0px;
  right: ${(props) => (props.isOpen ? '0' : '-100%')};
  transition: right 0.5s ease;
  @media (min-width: 640px) {
    z-index: 60;
    width: 384px;
    height: 100%;
    position: static;
    margin-right: ${(props) => (props.isOpen ? '0' : '-384px')};
    transition: margin-right 0.5s ease;
  }
`

const Header = styled.div`
  display: flex;
  width: stretch;
  align-items: center;
  gap: 16px;
  padding: 16px;
  @media (min-width: 640px) {
    padding: 20px;
  }
`

const Content = styled.div`
  display: flex;
  flex: 1;
  width: stretch;
  padding: 0 16px 16px 16px;
  flex-direction: column;
  gap: 12px;
  @media (min-width: 640px) {
    padding: 0 20px 20px 20px;
  }
`

const Footer = styled.div`
  display: flex;
  width: stretch;
  align-items: center;
  justify-content: center;
  border-top: solid 1px ${colors.white};
  gap: 8px;
  padding: 16px;
  margin: 0 16px;
  @media (min-width: 640px) {
    padding: 20px;
    margin: 0 20px;
  }
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
        <Icon
          name="ArrowForward"
          color={colors.white}
          onClick={closeCart}
          cursor="pointer"
          size="lg"
        />
        <P size="sm" color={colors.white}>
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
        <P color={colors.white} size="md">
          Total:
        </P>
        <P color={colors.white} size="md" bold>
          {formatCurrency(total)}
        </P>
      </Footer>
    </CartWrapper>
  )
}

export default Cart
