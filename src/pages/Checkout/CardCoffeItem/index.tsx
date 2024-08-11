import { Trash } from '@phosphor-icons/react'
import { useState } from 'react'

import { QuantityButton } from '../../../components/Form/QuantityButton'
import {
  Container,
  DescCoffeItem,
  RemoveButtonCoffeItem,
  ValorCoffeItem,
} from './styles'

interface CardCoffeItemProps {
  title: string
  image: string
  price: number
}

export function CardCoffeItem({ image, price, title }: CardCoffeItemProps) {
  const [quantity, setQuantity] = useState(1)

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrease = () => {
    setQuantity((prevQuantity) => prevQuantity - 1)
  }

  return (
    <Container>
      <img src={image} alt={title} style={{ gridArea: 'logo' }} />
      <DescCoffeItem style={{ gridArea: 'desc' }}>
        <h2>{title}</h2>
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
        <span>R$ {price.toFixed(2)}</span>
      </ValorCoffeItem>
    </Container>
  )
}
