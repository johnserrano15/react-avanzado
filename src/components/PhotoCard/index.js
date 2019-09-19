import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import Skeleton from 'react-loading-skeleton'
import { Article, ImgWrapper, Img, Button } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, loading }) => {
  if (loading) {
    return (
      <>
        <Skeleton height={240} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginLeft: '2px' }}>
            <Skeleton circle width={32} height={32} />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <Skeleton height={20} width={100} />
          </div>
        </div>
      </>
    )
  }

  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show && (
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' /> {likes} likes!
            </Button>
          </>
        )
      }
    </Article>
  )
}
