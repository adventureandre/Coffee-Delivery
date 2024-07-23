import { IconProps, ShoppingCart, Timer } from 'phosphor-react'
import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Conteiner = styled.main`
  max-width: 1440px;
  width: 100%;
  height: 544px;
  padding: 10px 10%;

  display: flex;
  flex-direction: row;

  background-image: url('./images/hero-bg.svg');
  background-size: cover;
`
export const IntoTitle = styled.div`
  display: flex;
  justify-content: center;

  ${mixins.fonts.titleM}

  h1 {
    line-height: 1;
    color: ${({ theme }) => theme.colors['base-title']};
    width: 588px;
  }
  p {
    color: ${({ theme }) => theme.colors.black};
    ${mixins.fonts.textL}
  }
`
export const IntoImage = styled.div`
  img {
    width: 450px;
  }
`

export const IntoItens = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;

  span {
    ${mixins.fonts.textM}
  }
`

export const IntoIconShop = styled(ShoppingCart)<IconProps>`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 5px;
`

export const IntoIconTimer = styled(Timer)<IconProps>`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 5px;
`
