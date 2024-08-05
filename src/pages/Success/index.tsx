import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { Container, Content, Info, SuccessTitle } from './style'

export function SucessoPage() {
  const theme = useTheme()

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
              Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
              <br /> Farrapos - Porto Alegre, RS
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
              <strong>Cartão de Crédito </strong>
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
