import { CoffeItens } from './CoffeItens'
import { CoffeListTitle, Container } from './styles'

export function OurCoffes() {
  return (
    <Container>
      <CoffeListTitle>Nossos cafés</CoffeListTitle>
      <CoffeItens />
    </Container>
  )
}
