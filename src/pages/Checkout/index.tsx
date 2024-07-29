import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import { InputForm } from '../../components/Form/InputForm'
import { CardCoffeItem } from './CardCoffeItem'
import {
  CoffesTotal,
  ConfirmButtonCoffeItem,
  Container,
  ContainerForm,
  ContainerPayments,
  HeadingForm,
  InforContainer,
  MainForm,
  TotalInfoCoffes,
} from './styles'

export function CheckoutPage() {
  const theme = useTheme()

  return (
    <Container>
      <InforContainer>
        <h2>Complete seu pedido</h2>
        <form action="">
          <ContainerForm>
            <HeadingForm>
              <MapPin size={22} />
              <div>
                <span>Endereço de Entrega</span>

                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </HeadingForm>
            <MainForm>
              <InputForm
                type="text"
                placeholder="CEP"
                style={{ gridArea: 'cep' }}
              />
              <InputForm
                type="text"
                placeholder="Rua"
                style={{ gridArea: 'rua' }}
              />
              <InputForm
                type="text"
                placeholder="Número"
                style={{ gridArea: 'numero' }}
              />
              <InputForm
                type="text"
                placeholder="Complemento"
                style={{ gridArea: 'complemento' }}
              />
              <InputForm
                type="text"
                placeholder="Bairro"
                style={{ gridArea: 'bairro' }}
              />
              <InputForm
                type="text"
                placeholder="Cidade"
                style={{ gridArea: 'cidade' }}
              />
              <InputForm
                type="text"
                placeholder="UF"
                style={{ gridArea: 'estado' }}
              />
            </MainForm>
          </ContainerForm>

          <ContainerForm>
            <HeadingForm>
              <CurrencyDollar size={22} color={theme.colors.purple} />
              <div>
                <span>Pagamento</span>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </HeadingForm>
            <ContainerPayments>
              <button>
                <CreditCard size={16} />
                Cartão de crédito
              </button>

              <button>
                <Bank size={16} />
                cartão de débito
              </button>

              <button>
                <Money size={16} />
                Cartão de crédito
              </button>
            </ContainerPayments>
          </ContainerForm>
        </form>
      </InforContainer>

      <InforContainer>
        <h2>Cafés selecionados</h2>

        <CoffesTotal>
          {Array.from({ length: 3 }).map((_, i) => (
            <CardCoffeItem key={i} />
          ))}

          <TotalInfoCoffes>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span className="totalBold">Total</span>
              <span className="totalBold">R$ 33,20</span>
            </div>
            <ConfirmButtonCoffeItem>confirmar pedido</ConfirmButtonCoffeItem>
          </TotalInfoCoffes>
        </CoffesTotal>
      </InforContainer>
    </Container>
  )
}
