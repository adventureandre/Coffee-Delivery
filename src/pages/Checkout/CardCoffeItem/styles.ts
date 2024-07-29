import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'logo desc valor';
  gap: 20px;
  grid-template-columns: 64px 1fr 70px;
  padding-bottom: 24px;

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  img {
    width: 64px;
    height: 64px;
  }
`

export const DescCoffeItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;

  h2 {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const RemoveButtonCoffeItem = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

  ${mixins.fonts.buttonM}
  text-transform: uppercase;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors['base-button']};

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple};
  }
  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`

export const ValorCoffeItem = styled.span`
  ${mixins.fonts.textM}
  font-weight: bold;
  color: ${({ theme }) => theme.colors['base-text']};
`
