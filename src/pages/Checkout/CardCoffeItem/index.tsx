import { Trash } from '@phosphor-icons/react'
import { useState } from 'react'

import { QuantityButton } from '../../../components/Form/QuantityButton'
import { useAppDispatch } from '../../../store'
import { add, removeAll } from '../../../store/slices/card'
import {
  Container,
  DescCoffeItem,
  RemoveButtonCoffeItem,
  ValorCoffeItem,
} from './styles'

interface CardCoffeItemProps {
  coffee: {
    title: string
    image: string
    price: number
    id: number
  }
  card: {
    id: number
    quantity: number
  }
}

export function CardCoffeItem({ coffee, card }: CardCoffeItemProps) {
  const dispatch = useAppDispatch()

  // Estado local para a quantidade, iniciado com a quantidade do estado global
  const [quantity, setQuantity] = useState<number>(card.quantity || 1)

  const handleIncrease = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    dispatch(add([card.id, newQuantity]))
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      dispatch(add([card.id, newQuantity]))
    } else {
      handleRemoveCoffe(coffee.id) // Remove o item se a quantidade for 1
    }
  }

  const handleRemoveCoffe = (id: number) => {
    dispatch(removeAll(id))
  }

  return (
    <Container>
      <img src={coffee.image} alt={coffee.title} style={{ gridArea: 'logo' }} />
      <DescCoffeItem style={{ gridArea: 'desc' }}>
        <h2>{coffee.title}</h2>
        <QuantityButton
          quantity={quantity} // Passa a quantidade do estado local
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
        <RemoveButtonCoffeItem onClick={() => handleRemoveCoffe(coffee.id)}>
          <Trash size={16} />
          Remover
        </RemoveButtonCoffeItem>
      </DescCoffeItem>
      <ValorCoffeItem style={{ gridArea: 'valor' }}>
        <span>R$ {coffee.price.toFixed(2)}</span>
      </ValorCoffeItem>
    </Container>
  )
}
