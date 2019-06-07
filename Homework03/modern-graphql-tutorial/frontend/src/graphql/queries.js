import { gql } from 'apollo-boost'

const POSTS_QUERY = gql`
  query {
    posts {
      title
      body
      author {
        name
      }
      published
    }
  }
`

const USERS_QUERY = gql`
  query {
    users {
      name
      id
    }
  }
`
export {POSTS_QUERY, USERS_QUERY}
