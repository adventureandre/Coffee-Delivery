import { CoffeItens } from './CoffeItens'
import { CoffeListTitle, Container, Content } from './styles'

export function OurCoffes() {
  return (
    <Container>
      <CoffeListTitle>Nossos cafés</CoffeListTitle>
      <Content>
        <CoffeItens />
        <CoffeItens />
        <CoffeItens />
        <CoffeItens />
        <CoffeItens />
        <CoffeItens />
        <CoffeItens />
        <CoffeItens />
        <CoffeItens />
        <CoffeItens />
      </Content>
    </Container>
  )
}
