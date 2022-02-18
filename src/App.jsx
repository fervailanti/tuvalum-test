import styled from 'styled-components'
import { Header } from './components'
import CartProvider from './contexts/cart'
import { Cart, Products } from './modules'

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
  background-color: #eeeeee;
`

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
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
