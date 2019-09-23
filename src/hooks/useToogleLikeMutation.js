import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input){
      id,
      liked,
      likes
    }
  }
`

export const useToogleLikeMutation = id => {
  const [mutation] = useMutation(LIKE_PHOTO)
  const toogleLike = id => {
    mutation({ variables: { input: { id } } })
  }

  return toogleLike
}
