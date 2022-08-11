import styled from 'styled-components'
import bannerImg from '../../assets/banner.svg'

export const HeaderContainer = styled.header`
  display: grid;
  place-items: center;
  background: url(${bannerImg}) no-repeat center center;
  background-size: cover;
  padding: 66px 0 104px;
`
