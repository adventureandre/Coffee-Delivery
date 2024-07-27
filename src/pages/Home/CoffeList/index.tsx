import { CoffeItens } from './CoffeItens'
import { CoffeListTitle, Container, Content } from './styles'

export function OurCoffes() {
  return (
    <Container>
      <CoffeListTitle>Nossos cafés</CoffeListTitle>
      <Content>
        {Array.from({ length: 4 }).map((_, i) => (
          <CoffeItens key={i} />
        ))}
      </Content>
    </Container>
  )
}
