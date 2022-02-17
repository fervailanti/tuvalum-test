import { useContext } from 'react'
import styled from 'styled-components'
import { P } from '../../components'
import { CartContext } from '../../contexts/cart'

const CartWrapper = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24em;
  background-color: #06e494;
  padding: 1.5em;
  transition: margin-right 0.5s;
  margin-right: ${(props) => (props.isOpen ? '0' : '-27em')};
`

const Cart = () => {
  const [state] = useContext(CartContext)
  return (
    <CartWrapper isOpen={state.isOpen}>
      <P size="md" color="white">
        Shopping Cart
      </P>
    </CartWrapper>
  )
}

export default Cart
