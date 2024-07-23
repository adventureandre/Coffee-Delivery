import { ShoppingCart, Timer } from 'phosphor-react'

import {
  Conteiner,
  IntoIconShop,
  IntoIconTimer,
  IntoImage,
  IntoItens,
  IntoTitle,
} from './styles.ts'

export function Home() {
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
              <IntoIconShop weight="fill" size={16} />
              Compra simples e segura
            </span>
            <span>
              <IntoIconTimer weight="fill" size={16} />
              Compra simples e segura
            </span>
          </div>
          <div>
            <span>
              <ShoppingCart weight="fill" size={16} />
              Compra simples e segura
            </span>
            <span>
              <Timer weight="fill" size={16} />
              Compra simples e segura
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
