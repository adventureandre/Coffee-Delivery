import { Trash } from '@phosphor-icons/react'
import { useState } from 'react'

import { QuantityButton } from '../QuantityButton'
import { Container, DescItem, RemoveButtonItem, ValorItem } from './styles'

export function Itens() {
  const [quantity, setquantity] = useState(12)

  const handleIncrease = () => {
    setquantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrease = () => {
    setquantity((prevQuantity) => prevQuantity - 1)
  }

  return (
    <Container>
      <img
        src="/images/coffees/arabe.png"
        alt="Coffe"
        style={{ gridArea: 'logo' }}
      />
      <DescItem style={{ gridArea: 'desc' }}>
        <h2>Expresso Tradicional</h2>

        <QuantityButton
          quantity={quantity}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />

        <RemoveButtonItem>
          <Trash size={16} />
          Remover
        </RemoveButtonItem>
      </DescItem>
      <ValorItem style={{ gridArea: 'valor' }}>
        <span>R$ 9,90</span>
      </ValorItem>
    </Container>
  )
}
