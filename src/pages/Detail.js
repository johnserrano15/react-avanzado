import React from 'react'
import { PhotoCardDetail } from '../components/PhotoCardDetail'
import { Layout } from '../components/Layout'

const Detail = ({ id }) => (
  <Layout title={`Fotografía ${id}`}>
    <PhotoCardDetail id={id} />
  </Layout>
)

export default Detail
