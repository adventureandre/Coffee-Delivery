import { zodResolver } from '@hookform/resolvers/zod'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import z from 'zod'

import { InputForm } from '../../components/Form/InputForm'
import { Radio } from '../../components/Form/Radio'
import { useAppDispatch, useAppSelector } from '../../store'
import { loadCart } from '../../store/slices/card'
import { loadCoffes } from '../../store/slices/coffees'
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
  complement: z.string().optional(),
  paymentMethod: z.enum(['cash', 'credit', 'debit'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

type newOrderSchemaTypes = z.infer<typeof newOrderSchema>

export function CheckoutPage() {
  const navigate = useNavigate()
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const caffesCard = useAppSelector((state) => state.card.cardState.itens)
  const caffesItem = useAppSelector((state) => state.coffees.coffesList)

  const selectedCaffes = caffesItem?.filter((coffee) =>
    caffesCard.some((cardItem) => cardItem.id === coffee.id),
  )

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<newOrderSchemaTypes>({
    resolver: zodResolver(newOrderSchema),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  const totalItemsPrice =
    selectedCaffes?.reduce((total, caffe) => {
      const cardItem = caffesCard.find((item) => item.id === caffe.id)
      return cardItem ? total + caffe.price * cardItem.quantity : total
    }, 0) || 0

  const delivery = 3.5
  const grandTotal = totalItemsPrice + delivery

  function handleSendOrder(data: newOrderSchemaTypes) {
    console.log(data)
  }

  useEffect(() => {
    dispatch(loadCoffes())
    dispatch(loadCart())

    if (totalItemsPrice <= 0) {
      navigate('/')
    }
  }, [totalItemsPrice, dispatch, navigate])

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
                Cartão de débito
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === 'cash'}
                {...register('paymentMethod')}
                value="cash"
              >
                <Money size={16} />
                Dinheiro
              </Radio>
            </ContainerPayments>
            <PaymentMessage>{errors.paymentMethod?.message}</PaymentMessage>
          </ContainerForm>
        </form>
      </InforContainer>

      <InforContainer>
        <h2>Cafés selecionados</h2>

        <CoffesTotal>
          {selectedCaffes &&
            selectedCaffes.map((caffe) => {
              const card = caffesCard.find((card) => card.id === caffe.id)
              return card ? (
                <CardCoffeItem key={caffe.id} coffee={caffe} card={card} />
              ) : null
            })}

          <TotalInfoCoffes>
            <div>
              <span>Total de itens</span>
              <span>R$ {totalItemsPrice.toFixed(2)}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ {delivery.toFixed(2)}</span>
            </div>

            <div>
              <span className="totalBold">Total</span>
              <span className="totalBold">
                R$ {totalItemsPrice > 0 ? grandTotal.toFixed(2) : '0.00'}
              </span>
            </div>
            <ConfirmButtonCoffeItem type="submit" form="order">
              Confirmar pedido
            </ConfirmButtonCoffeItem>
          </TotalInfoCoffes>
        </CoffesTotal>
      </InforContainer>
    </Container>
  )
}
