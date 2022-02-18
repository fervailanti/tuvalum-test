import styled from 'styled-components'
import { Icon, P } from '../../components'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-align: center;
  padding: 0 32px;
`

const EmptyState = () => {
  return (
    <Wrapper>
      <Icon name="ShoppingBasket" size="2xl" color="white" />
      <P size="md" color="white">
        Your cart is empty
      </P>
      <P size="xs" color="white" bold>
        Looks like you haven't added anything to your cart yet.
      </P>
    </Wrapper>
  )
}

export default EmptyState
