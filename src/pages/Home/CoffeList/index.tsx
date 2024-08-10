import { useEffect } from 'react'

import { coffees } from '../../../../data.json'
import { useAppDispatch } from '../../../store'
import { loadCart } from '../../../store/slices/card'
import { CoffeItens } from './CoffeItens'
import { CoffeListTitle, Container, Content } from './styles'

export function OurCoffes() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadCart())
  }, [])

  return (
    <Container>
      <CoffeListTitle>Nossos cafés</CoffeListTitle>
      <Content>
        {coffees.map((coffee) => (
          <CoffeItens key={coffee.id} coffee={coffee} />
        ))}
      </Content>
    </Container>
  )
}
