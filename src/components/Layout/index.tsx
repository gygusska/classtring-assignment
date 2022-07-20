import { Outlet } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { Suspense } from 'react'
import Spinner from 'components/Spinner'
import { QuizIcon } from '../../assets/svgs/index'
import reset from 'styled-reset'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  background: #40beae;
  min-height: 100vh;
`
const MainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background: rgb(255 255 255 / 0.8);
`
const Container = styled.div`
  width: 940px;
  text-align: center;
`

const StyledIcon = styled(QuizIcon)`
  position: absolute;
  width: 100%;
  max-width: 1720px;
  height: 100%;
  max-height: 1229px;
`
const GlobalStyle = createGlobalStyle`
  ${reset}
`

const Layout = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <StyledIcon />
      <MainContainer>
        <Container>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </Container>
      </MainContainer>
    </Wrapper>
  )
}

export default Layout
