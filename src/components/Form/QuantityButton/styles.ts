import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const TotalItens = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  ${mixins.fonts.textM}

  padding: 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-button']};

  button {
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    width: 38px;
    height: 38px;

    width: 14px;
    height: 14px;
  }
`
