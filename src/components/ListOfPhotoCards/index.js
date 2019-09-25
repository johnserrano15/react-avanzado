import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, data, error } = useGetPhotos(categoryId)
  // if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  if (loading) {
    return (
      <ul>
        {[{ id: '0', liked: false, src: '#', likes: 0 }].map(item => (
          <PhotoCard key={item.id} loading {...item} />
        ))}
      </ul>
    )
  }

  return (
    <ul>
      {data.photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
