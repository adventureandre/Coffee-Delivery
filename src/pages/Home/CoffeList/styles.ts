import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  height: 544px;
  padding: 10px 10%;
  
`

export const CoffeListTitle = styled.h2`
  width: 100%;
  ${mixins.fonts.titleL}
  color: ${({ theme }) => theme.colors['base-subtitle']};
  margin-bottom: 30px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 32px;
  width: 100%;
`
