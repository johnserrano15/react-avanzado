import React from 'react'
import { Link } from '@reach/router'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'
import { Article, ImgWrapper, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useToogleLikeMutation } from '../../hooks/useToogleLikeMutation'

import { FavButton } from '../FavButton'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE, loading }) => {
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

  const toogleLike = useToogleLikeMutation()

  const handleFavClick = () => toogleLike(id)

  return (
    <Article ref={element}>
      {
        show && (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
        )
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
