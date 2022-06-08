import { Link, routes } from '@redwoodjs/router'
import type { ArticlesQuery, FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Article from '../Article/Article'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message} </div>
)

export const Success = ({ article }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <>
      <Article article={article}/>
    </>
  )
}