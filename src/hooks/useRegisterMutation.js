import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const useRegisterMutation = (email, password) => {
  const [mutation, { data, error }] = useMutation(REGISTER)

  const registerUser = (email, password) => {
    mutation({ variables: { input: { email, password } } })
  }

  return { registerUser, data, error }
}
