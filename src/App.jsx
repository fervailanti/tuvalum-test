import styled from 'styled-components'
import { Header } from './components'
import CartProvider from './contexts/cart'
import { Cart, Products } from './modules'
import colors from './utils/constants'

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  background-color: ${colors.grayLight};
  @media (min-width: 640px) {
    flex-direction: row;
    overflow-x: hidden;
  }
`

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
`

const Main = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`

const App = () => {
  return (
    <CartProvider>
      <AppWrapper>
        <MainWrapper>
          <Header />
          <Main>
            <Products />
          </Main>
        </MainWrapper>
        <Cart />
      </AppWrapper>
    </CartProvider>
  )
}

export default App
