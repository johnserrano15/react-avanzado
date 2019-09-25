import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const Home = ({ id }) => (
  <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Layout>
)

export default React.memo(Home, (prevProps, props) => prevProps.id === props.id)
