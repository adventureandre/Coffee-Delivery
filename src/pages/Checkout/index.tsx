import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import z from 'zod'

import { InputForm } from '../../components/Form/InputForm'
import { Radio } from '../../components/Form/Radio'
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
  PaymentMessage,
  TotalInfoCoffes,
} from './styles'

const newOrderSchema = z.object({
  number: z.string(),
  address: z.string().min(1, 'Informe a rua'),
  neighborhood: z.string().min(1, 'Informe o Bairro'),
  city: z.string().min(1, 'Informe a Cidade'),
  state: z.string().min(1, 'Informe o Estado'),
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  complement: z.string(),
  paymentMethod: z.enum(['cash', 'credit', 'debit'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

type newOrderSchemaTypes = z.infer<typeof newOrderSchema>

export function CheckoutPage() {
  const theme = useTheme()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<newOrderSchemaTypes>({
    resolver: zodResolver(newOrderSchema),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  function handleSendOrder(data: newOrderSchemaTypes) {
    console.log(data)
    //pegar o total  e juntar na order
  }

  return (
    <Container>
      <InforContainer>
        <h2>Complete seu pedido</h2>
        <form id="order" onSubmit={handleSubmit(handleSendOrder)}>
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
                type="number"
                placeholder="CEP"
                style={{ gridArea: 'cep' }}
                {...register('cep', { valueAsNumber: true })}
                error={errors.cep}
              />
              <InputForm
                type="text"
                placeholder="Rua"
                style={{ gridArea: 'rua' }}
                {...register('address')}
                error={errors.address}
              />
              <InputForm
                type="text"
                placeholder="Número"
                style={{ gridArea: 'numero' }}
                {...register('number')}
                error={errors.number}
              />
              <InputForm
                type="text"
                placeholder="Complemento"
                style={{ gridArea: 'complemento' }}
                {...register('complement')}
              />
              <InputForm
                type="text"
                placeholder="Bairro"
                style={{ gridArea: 'bairro' }}
                {...register('neighborhood')}
                error={errors.neighborhood}
              />
              <InputForm
                type="text"
                placeholder="Cidade"
                style={{ gridArea: 'cidade' }}
                {...register('city')}
                error={errors.city}
              />
              <InputForm
                type="text"
                placeholder="UF"
                style={{ gridArea: 'estado' }}
                {...register('state')}
                error={errors.state}
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
              <Radio
                isSelected={selectedPaymentMethod === 'credit'}
                {...register('paymentMethod')}
                value="credit"
              >
                <CreditCard size={16} />
                Cartão de crédito
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === 'debit'}
                {...register('paymentMethod')}
                value="debit"
              >
                <Bank size={16} />
                cartão de débito
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === 'cash'}
                {...register('paymentMethod')}
                value="cash"
              >
                <Money size={16} />
                Cartão de crédito
              </Radio>
            </ContainerPayments>
            <PaymentMessage>{errors.paymentMethod?.message}</PaymentMessage>
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
            <ConfirmButtonCoffeItem type="submit" form="order">
              confirmar pedido
            </ConfirmButtonCoffeItem>
          </TotalInfoCoffes>
        </CoffesTotal>
      </InforContainer>
    </Container>
  )
}
