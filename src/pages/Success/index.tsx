import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'

import { getOrderStorege } from '../../store/storege'
import { Container, Content, Info, SuccessTitle } from './style'

export function SucessoPage() {
  const theme = useTheme()
  const { orderId } = useParams()

  const orders = getOrderStorege()
  console.log(orders)
  const order = orders.find((order) => order.id === orderId)

  const paymentMethodLabels = {
    cash: 'Dinheiro',
    debit: 'Débito',
    credit: 'Crédito',
  }

  if (!order) {
    return <h2>Pedido não encontrado</h2>
  }

  return (
    <Container>
      <SuccessTitle>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessTitle>
      <Content>
        <Info>
          <div>
            <div style={{ backgroundColor: theme.colors.purple }}>
              <MapPin weight="fill" />
            </div>
            <span>
              Entrega em{' '}
              <strong>
                {order.address}, {order.number}
              </strong>
              <br /> {order.neighborhood} - {order.city}, {order.state}
            </span>
          </div>

          <div>
            <div style={{ backgroundColor: theme.colors.yellow }}>
              <Timer weight="fill" />
            </div>
            <span>
              Previsão de entrega <br />
              <strong>20 min - 30 min </strong>
            </span>
          </div>

          <div>
            <div style={{ backgroundColor: theme.colors['yellow-dark'] }}>
              <CurrencyDollar weight="fill" />
            </div>
            <span>
              Pagamento na entrega <br />
              <strong>{paymentMethodLabels[order.paymentMethod]}</strong>
            </span>
          </div>
        </Info>
        <div>
          <img src="/images/delivery.svg" alt="delivery" />
        </div>
      </Content>
    </Container>
  )
}
