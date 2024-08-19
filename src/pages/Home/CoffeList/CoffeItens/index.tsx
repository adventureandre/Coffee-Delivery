import { CheckFat, ShoppingCartSimple } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTheme } from 'styled-components'

import { QuantityButton } from '../../../../components/Form/QuantityButton'
import { add } from '../../../../store/slices/card'
import {
  ButtonCart,
  CaffeDesc,
  CaffeFooter,
  CaffeTag,
  CaffeTitle,
  CoffeeImg,
  Container,
} from './styles'

interface CoffeItensProps {
  coffee: {
    id: number
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeItens({ coffee }: CoffeItensProps) {
  const theme = useTheme()

  const dispatch = useDispatch()

  const [quantity, setquantity] = useState<number>(1)
  const [isAddtoCart, setIsAddtoCart] = useState<boolean>(false)

  function handleIncrease() {
    setquantity((prevQuantity) => prevQuantity + 1)
  }

  function handleAddToCart() {
    dispatch(add([coffee.id, quantity]))
    setIsAddtoCart(true)
  }

  function handleDecreases() {
    if (quantity === 1) {
      return
    }
    setquantity((prevQuantity) => prevQuantity - 1)
  }

  useEffect(() => {
    setTimeout(() => {
      if (isAddtoCart) {
        setIsAddtoCart(false)
        setquantity(1)
      }
    }, 2000)
  }, [isAddtoCart])

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />

      <CaffeTag>
        {coffee.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </CaffeTag>

      <CaffeTitle>{coffee.title}</CaffeTitle>
      <CaffeDesc>{coffee.description}</CaffeDesc>
      <CaffeFooter>
        <span>
          R$ <strong>{coffee.price.toFixed(2)}</strong>
        </span>

        <QuantityButton
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecreases}
        />

        {isAddtoCart ? (
          <ButtonCart style={{ backgroundColor: theme.colors['yellow-dark'] }}>
            <CheckFat weight="fill" />
          </ButtonCart>
        ) : (
          <ButtonCart
            onClick={handleAddToCart}
            style={{ backgroundColor: theme.colors['purple-dark'] }}
          >
            <ShoppingCartSimple weight="fill" />
          </ButtonCart>
        )}
      </CaffeFooter>
    </Container>
  )
}
