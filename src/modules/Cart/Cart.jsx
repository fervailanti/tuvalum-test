import styled from 'styled-components'
import { P } from '../../components'

const CartWrapper = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24em;
  background-color: #06e494;
  padding: 1.5em;
`

const Cart = () => {
  return (
    <CartWrapper>
      <P size="md" color="white">
        Shopping Cart
      </P>
    </CartWrapper>
  )
}

export default Cart
