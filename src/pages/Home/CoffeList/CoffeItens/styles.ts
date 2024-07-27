import styled from 'styled-components'

import { mixins } from '../../../../styles/mixins'

export const Container = styled.article`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;

  text-align: center;
`
export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const CaffeTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 12px;

  span {
    padding: 4px 8px;
    border-radius: 100px;

    text-transform: uppercase;
    ${mixins.fonts.tag}
    white-space: nowrap;

    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const CaffeTitle = styled.h2`
  ${mixins.fonts.titleS}
  margin-top: 16px;
  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const CaffeDesc = styled.p`
  ${mixins.fonts.textS}
  color: ${({ theme }) => theme.colors['base-label']};
  margin-top: 8px;
  margin-bottom: 33px;
`

export const CaffeFooter = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 8px;

  span {
    flex-basis: 50%;
    color: ${({ theme }) => theme.colors['base-text']};
    ${mixins.fonts.textS};
    strong {
      ${mixins.fonts.titleM}
    }
  }
`

export const ButtonCart = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 20%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`
