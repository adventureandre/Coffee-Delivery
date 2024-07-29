import { coffees } from '../../../../data.json'
import { CoffeItens } from './CoffeItens'
import { CoffeListTitle, Container, Content } from './styles'

export function OurCoffes() {
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
