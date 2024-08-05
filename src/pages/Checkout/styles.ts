import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  height: 450px;
  padding: 10px 10%;

  display: flex;
  flex-direction: row;
  justify-content: center;
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
  margin-bottom: 32px;

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

export const ContainerPayments = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    ${mixins.fonts.buttonM}
    text-transform: uppercase;
    cursor: pointer;
    padding: 16px;
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
  }
`

export const CoffesTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 40px;
  min-width: 448px;

  border-radius: 0 32px 0 32px;
  background-color: ${({ theme }) => theme.colors['base-card']};
`

export const TotalInfoCoffes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    span {
      ${mixins.fonts.textM}
      color: ${({ theme }) => theme.colors['base-text']};
    }
    .totalBold {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      ${mixins.fonts.textL}
    }
  }
`
export const ConfirmButtonCoffeItem = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 100%;

  ${mixins.fonts.buttonG}
  text-transform: uppercase;
  cursor: pointer;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
export const PaymentMessage = styled.p`
  ${mixins.fonts.textXS};
  width: 100%;
  font-weight: 400;
  color: red;
`
