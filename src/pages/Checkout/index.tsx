import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from 'phosphor-react'
import { useTheme } from 'styled-components'

import { QuantityButton } from '../../components/Form/QuantityButton'
import {
  CoffeItem,
  CoffesTotal,
  Container,
  ContainerForm,
  ContainerPayments,
  DescCoffeItem,
  HeadingForm,
  InforContainer,
  InputForm,
  MainForm,
  RemoveButtonCoffeItem,
  ValorCoffeItem,
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
          {Array.from({ length: 2 }).map((_, i) => (
            <CoffeItem key={i}>
              <img
                src="/images/coffees/arabe.png"
                alt="Coffe"
                style={{ gridArea: 'logo' }}
              />
              <DescCoffeItem style={{ gridArea: 'desc' }}>
                <h2>Expresso Tradicional</h2>
                <QuantityButton />
                <RemoveButtonCoffeItem>
                  <Trash size={16} />
                  Remover
                </RemoveButtonCoffeItem>
              </DescCoffeItem>
              <ValorCoffeItem style={{ gridArea: 'valor' }}>
                <span>R$ 9,90</span>
              </ValorCoffeItem>
            </CoffeItem>
          ))}
        </CoffesTotal>
      </InforContainer>
    </Container>
  )
}
