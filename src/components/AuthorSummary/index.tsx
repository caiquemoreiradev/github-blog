import { useBlog } from '../../hooks/useBlog'
import { ArrowUpIcon } from '../Icons'
import { AuthorSummaryContainer } from './styles'

export function AuthorSummary() {
  const {
    blogState: { authorInfo },
  } = useBlog()
  return (
    <AuthorSummaryContainer>
      <div>
        <img src={authorInfo?.avatar_url} alt={authorInfo?.login} />
      </div>

      <div>
        <div>
          <h2>{authorInfo?.login}</h2>
          <span>
            <a href={authorInfo?.html_url} target="_blank" rel="noreferrer">
              github <ArrowUpIcon />
            </a>
          </span>
          <p>{authorInfo?.bio}</p>
        </div>
      </div>
    </AuthorSummaryContainer>
  )
}
