import { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../contexts/cart'
import { logo } from '../images'
import Icon from './Icon'

const StyledHeader = styled.header`
  z-index: 10;
  padding: 1em;
  background-color: white;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
`

const HeaderImg = styled.img`
  height: 2.5em;
  pointer-events: none;
`

const Header = () => {
  const [, dispatch] = useContext(CartContext)
  const openCart = () => dispatch({ type: 'OPEN_CART' })
  return (
    <StyledHeader>
      <HeaderImg src={logo} alt="logo" />
      <Icon name="ShoppingCart" color="#06e494" onClick={openCart} cursor="pointer" />
    </StyledHeader>
  )
}

export default Header
