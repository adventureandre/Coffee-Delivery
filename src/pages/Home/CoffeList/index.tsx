import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../../store'
import { loadCart } from '../../../store/slices/card'
import { loadCoffes } from '../../../store/slices/coffees'
import { CoffeItens } from './CoffeItens'
import { CoffeListTitle, Container, Content } from './styles'

export interface CoffeeIten {
  id: number
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function OurCoffes() {
  const dispatch = useAppDispatch()
  const coffees = useAppSelector((state) => {
    return state.coffees.coffesList
  })

  useEffect(() => {
    dispatch(loadCart())
    dispatch(loadCoffes())
  }, [])

  return (
    <Container>
      <CoffeListTitle>Nossos cafés</CoffeListTitle>
      <Content>
        {coffees &&
          coffees.map((coffee) => (
            <CoffeItens key={coffee.id} coffee={coffee} />
          ))}
      </Content>
    </Container>
  )
}
