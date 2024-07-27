import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  height: 450px;
  padding: 10px 10%;

  display: flex;
  flex-direction: row;
  gap: 32px;
`

export const InforContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`

export const ContainerForm = styled.div`
  min-width: 640px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 40px;
`

export const HeadingForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;

  width: 100%;

  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
    margin-top: 0px;
  }

  div {
    display: flex;
    align-items: flex-start;
    gap: 2px;

    span {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      ${mixins.fonts.textM}
    }

    p {
      ${mixins.fonts.textS};
    }
  }
`
export const MainForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'rua rua rua'
    'numero complemento complemento'
    'bairro cidade estado';

  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const InputForm = styled.input`
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;
  padding: 12px;
  border: none;

  &::placeholder {
    ${mixins.fonts.textXS}
    color:${({ theme }) => theme.colors['base-label']};
  }
`
