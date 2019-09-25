import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfFavs } from '../components/ListOfFavs'
import { useGetFavorites } from '../hooks/useGetFavorites'

const Favs = () => {
  const { loading, error, data = { favs: [{ id: '0', src: '#' }] } } = useGetFavorites()
  const { favs } = data

  return (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <ListOfFavs loading={loading} error={error} favs={favs} />
    </Layout>
  )
}

export default Favs
