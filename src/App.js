import React from 'react'
import { Router } from '@reach/router'
import { Logo } from './components/Logo'
import { PhotoCardDetail } from './components/PhotoCardDetail'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  // console.log(detailId)

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardDetail id={detailId} />
          : (
            <Router>
              <Home path='/' />
              <Home path='/pet/:id' />
            </Router>
          )
      }
    </>
  )
}
