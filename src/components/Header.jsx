import styled from 'styled-components'
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

const StyledIcon = styled(Icon)`
  transition: opacity 0.3s;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <HeaderImg src={logo} alt="logo" />
      <StyledIcon name="ShoppingCart" size="sm" color="06e494" />
    </StyledHeader>
  )
}

export default Header
