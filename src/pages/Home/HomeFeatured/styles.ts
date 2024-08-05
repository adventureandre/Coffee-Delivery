import { IconProps, ShoppingCart, Timer } from '@phosphor-icons/react'
import styled from 'styled-components'

import { mixins } from '../../../styles/mixins'

export const Conteiner = styled.main`
  max-width: 1440px;
  width: 100%;
  min-height: 450px;
  padding: 10px 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  background-image: url('./images/hero-bg.svg');
  background-size: cover;
`
export const IntoTitle = styled.div`
  padding-top: 30px;

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
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
  }

  span {
    ${mixins.fonts.textM}
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    padding: 5px;

    div {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
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
