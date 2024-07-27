import { CurrencyDollar, MapPin } from 'phosphor-react'

import {
  Container,
  ContainerForm,
  HeadingForm,
  InforContainer,
  InputForm,
  MainForm,
} from './styles'

export function CheckoutPage() {
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
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </HeadingForm>
            <MainForm></MainForm>
          </ContainerForm>
        </form>
      </InforContainer>

      <InforContainer>
        <h2>Cafés selecionados</h2>
      </InforContainer>
    </Container>
  )
}
