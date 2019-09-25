import React from 'react'
import { PhotoCardDetail } from '../components/PhotoCardDetail'
import { Layout } from '../components/Layout'

export const Detail = ({ id }) => (
  <Layout title={`Fotografía ${id}`}>
    <PhotoCardDetail id={id} />
  </Layout>
)
