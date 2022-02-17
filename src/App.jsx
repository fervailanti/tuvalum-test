import styled from 'styled-components'
import { Header } from './components'
import { Cart } from './modules'

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
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
`

const App = () => {
  return (
    <AppWrapper>
      <MainWrapper>
        <Header />
        <Main>{/* Here main content (products list) */}</Main>
      </MainWrapper>
      <Cart />
    </AppWrapper>
  )
}

export default App
