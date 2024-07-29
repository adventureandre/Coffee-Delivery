import { Trash } from '@phosphor-icons/react'
import { useState } from 'react'

import { QuantityButton } from '../../../components/Form/QuantityButton'
import {
  Container,
  DescCoffeItem,
  RemoveButtonCoffeItem,
  ValorCoffeItem,
} from './styles'

export function CardCoffeItem() {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrease = () => {
    setQuantity((prevQuantity) => prevQuantity - 1)
  }

  return (
    <Container>
      <img
        src="/images/coffees/arabe.png"
        alt="Coffe"
        style={{ gridArea: 'logo' }}
      />
      <DescCoffeItem style={{ gridArea: 'desc' }}>
        <h2>Expresso Tradicional</h2>
        <QuantityButton
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
        <RemoveButtonCoffeItem>
          <Trash size={16} />
          Remover
        </RemoveButtonCoffeItem>
      </DescCoffeItem>
      <ValorCoffeItem style={{ gridArea: 'valor' }}>
        <span>R$ 9,90</span>
      </ValorCoffeItem>
    </Container>
  )
}
