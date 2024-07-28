import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const Container = styled.input`
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;
  padding: 12px;
  border: none;

  &::placeholder {
    ${mixins.fonts.textXS}
    color:${({ theme }) => theme.colors['base-label']};
  }
`
