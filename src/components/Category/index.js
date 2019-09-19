import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?', loading }) => {
  if (loading) {
    return (
      <>
        <Skeleton circle width={75} height={75} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Skeleton circle width={21} height={21} />
        </div>
      </>
    )
  }

  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}
