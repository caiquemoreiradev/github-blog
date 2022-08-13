import styled from 'styled-components'

export const PostCardContainer = styled.article`
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 0 1 396px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > h2 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 2rem;
    line-height: 160%;
    max-width: 25rem;
  }

  > span {
    color: ${(props) => props.theme['base-span']};
    font-weight: 400;
    font-size: 1.4rem;
  }
`

export const Content = styled.div`
  > p {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${(props) => props.theme['base-text']};
  }
`
