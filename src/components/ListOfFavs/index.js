import React from 'react'
import { useGetFavorites } from '../../hooks/useGetFavorites'
import Skeleton from 'react-loading-skeleton'
import { Link, Grid, Image, GridSkeleton } from './styles'

export const ListOfFavs = () => {
  const { loading, error, data } = useGetFavorites()
  if (error) return 'error'
  // console.log(data)

  if (loading) {
    return (
      <ul>
        <GridSkeleton>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => (<Skeleton key={id} height={150} width={150} style={{ display: 'block' }} />))}
        </GridSkeleton>
      </ul>
    )
  }

  return (
    <ul>
      <Grid>
        {data.favs.map(fav => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </Link>
        ))}
      </Grid>
    </ul>
  )
}
