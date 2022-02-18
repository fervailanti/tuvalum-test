import { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../contexts/cart'
import { logo } from '../images'
import colors from '../utils/constants'
import Icon from './Icon'
import P from './P'

const StyledHeader = styled.header`
  z-index: 50;
  padding: 16px;
  background-color: ${colors.white};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`

const HeaderImg = styled.img`
  height: 40px;
  pointer-events: none;
`

const CartIconWrapper = styled.div`
  position: relative;
  padding: 2px;
`

const CartCounter = styled.div`
  background-color: ${colors.red};
  height: 20px;
  width: 20px;
  border-radius: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -6px;
  right: -6px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
`

const Header = () => {
  const [state, dispatch] = useContext(CartContext)
  const openCart = () => dispatch({ type: 'OPEN_CART' })
  const showCartCounter = state.products.length > 0
  return (
    <StyledHeader>
      <HeaderImg src={logo} alt="logo" />
      <CartIconWrapper>
        <Icon
          name="ShoppingCart"
          color={colors.primary}
          onClick={openCart}
          cursor="pointer"
          size="lg"
        />
        {showCartCounter && (
          <CartCounter>
            <P color={colors.white} bold size="xxxs">
              {state.products.length}
            </P>
          </CartCounter>
        )}
      </CartIconWrapper>
    </StyledHeader>
  )
}

export default Header
