import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const Container = styled.div`
  gap: 2px;
  align-items: flex-start;
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;
  padding: 12px;
  border: none;
  width: 100%;

  &::placeholder {
    ${mixins.fonts.textXS}
    color:${({ theme }) => theme.colors['base-label']};
  }
`

export const ErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`
