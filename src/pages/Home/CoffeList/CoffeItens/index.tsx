import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useTheme } from 'styled-components'

import {
  CaffeDesc,
  CaffeFooter,
  CaffeTag,
  CaffeTitle,
  CoffeeImg,
  Container,
} from './styles'

export function CoffeItens() {
  const theme = useTheme()

  return (
    <Container>
      <CoffeeImg src="./images/coffees/americano.png" />
      <CaffeTag>
        <span>Tradicional</span>
        <span>com leite</span>
        <span>gelado</span>
      </CaffeTag>
      <CaffeTitle>Chocolate Quente</CaffeTitle>
      <CaffeDesc>
        Bebida feita com chocolate dissolvido no leite quente e café
      </CaffeDesc>
      <CaffeFooter>
        <span>
          R$ <strong>9,90</strong>
        </span>

        <div>
          <button>
            <Minus weight="bold" color={theme.colors.purple} />
          </button>
          2
          <button>
            <Plus weight="bold" color={theme.colors.purple} />
          </button>
        </div>

        <button style={{ backgroundColor: theme.colors['purple-dark'] }}>
          <ShoppingCartSimple weight="fill" />
        </button>
      </CaffeFooter>
    </Container>
  )
}
