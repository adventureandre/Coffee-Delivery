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
    id: string
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

  const [quatity, setquatity] = useState<number>(1)
  const [isaddtoCart, setIsaddtoCart] = useState<boolean>(false)

  function handleIncrease() {
    setquatity((prevQuantity) => prevQuantity + 1)
  }

  function handleDecreases() {
    if (quatity === 1) {
      return
    }
    setquatity((prevQuantity) => prevQuantity - 1)
  }

  useEffect(() => {
    setTimeout(() => {
      if (isaddtoCart) {
        dispatch(add([parseInt(coffee.id), quatity]))
        setIsaddtoCart(false)
        setquatity(1)
      }
    }, 2000)
  }, [isaddtoCart])

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
          quantity={quatity}
          onIncrease={handleIncrease}
          onDecrease={handleDecreases}
        />

        {isaddtoCart ? (
          <ButtonCart style={{ backgroundColor: theme.colors['yellow-dark'] }}>
            <CheckFat weight="fill" />
          </ButtonCart>
        ) : (
          <ButtonCart
            onClick={() => setIsaddtoCart(true)}
            style={{ backgroundColor: theme.colors['purple-dark'] }}
          >
            <ShoppingCartSimple weight="fill" />
          </ButtonCart>
        )}
      </CaffeFooter>
    </Container>
  )
}
