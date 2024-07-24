import { CaffeDesc, CaffeTag, CaffeTitle, CoffeeImg, Container } from './styles'

export function CoffeItens() {
  return (
    <Container>
      <CoffeeImg src="./images/coffees/americano.png" />
      <CaffeTag>
        <span>Tradicional</span>
        <span>com leite</span>
        <span>gelado</span>
      </CaffeTag>
      <CaffeTitle>Chocolate Quente</CaffeTitle>
      <CaffeDesc>
        Bebida feita com chocolate dissolvido no leite quente e café
      </CaffeDesc>
    </Container>
  )
}
