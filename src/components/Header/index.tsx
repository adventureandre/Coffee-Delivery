import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { useAppSelector } from '../../store/index.ts'
import { Aside, Container, Location } from './styles.ts'

export function Header() {
  const totalItensCard = useAppSelector((state) => {
    return state.card.cardState.itens.length
  })

  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>
      <Aside>
        <Location>
          <MapPin size={22} weight="fill" /> <span>Goiania, GO</span>
        </Location>
        <Link to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          <span>{totalItensCard}</span>
        </Link>
      </Aside>
    </Container>
  )
}
