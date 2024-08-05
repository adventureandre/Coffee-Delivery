import { Coffee, Package } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import {
  Conteiner,
  IntoIconShop,
  IntoIconTimer,
  IntoImage,
  IntoItens,
  IntoTitle,
} from './styles'

export function HomeFeatured() {
  const theme = useTheme()

  return (
    <Conteiner>
      <IntoTitle>
        <h1>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <IntoItens>
          <div>
            <span>
              <div style={{ backgroundColor: theme.colors['yellow-dark'] }}>
                <IntoIconShop weight="fill" size={16} />
              </div>
              Compra simples e segura
            </span>

            <span>
              <div style={{ backgroundColor: theme.colors.yellow }}>
                <IntoIconTimer weight="fill" size={16} />
              </div>
              Entrega rápida e rastreada
            </span>
          </div>

          <div>
            <span>
              <div style={{ backgroundColor: theme.colors['base-text'] }}>
                <Package weight="fill" size={16} />
              </div>
              Embalagem mantém o café intacto
            </span>

            <span>
              <div style={{ backgroundColor: theme.colors.purple }}>
                <Coffee weight="fill" size={16} />
              </div>
              O café chega fresquinho até você
            </span>
          </div>
        </IntoItens>
      </IntoTitle>
      <IntoImage>
        <img src="./images/hero.svg" alt="Coffe Delivery" />
      </IntoImage>
    </Conteiner>
  )
}
