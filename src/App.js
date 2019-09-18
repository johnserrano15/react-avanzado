import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardDetail } from './components/PhotoCardDetail'
import { GlobalStyle } from './styles/GlobalStyles'

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
            <>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={2} />
            </>
          )
      }
    </>
  )
}
