import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const getFavs = gql`
  query getFavs {
    favs {
      id,
      categoryId,
      src,
      likes,
      userId
    }
  }
`

export const useGetFavorites = () => {
  const { loading, data, error } = useQuery(getFavs, { fetchPolicy: 'network-only' })

  return { loading, data, error }
}
