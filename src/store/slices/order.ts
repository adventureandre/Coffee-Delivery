import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { newOrderSchemaTypes } from '../../pages/Checkout'
import { addOrderStorage } from '../storege'
import { ItemCard } from './card'

export type OrderState = newOrderSchemaTypes & {
  id: string
  itens: ItemCard[]
  total: number
}

const initialState: OrderState = {
  id: '',
  cep: 0,
  address: '',
  city: '',
  neighborhood: '',
  number: '',
  paymentMethod: 'cash',
  state: '',
  complement: '',
  itens: [],
  total: 0,
}

export const orderSlice = createSlice({
  name: 'orderCoffees',
  initialState,
  reducers: {
    addNewOrder: (state, action: PayloadAction<OrderState>) => {
      addOrderStorage(action.payload)
    },
  },
})

export const order = orderSlice.reducer

export const { addNewOrder } = orderSlice.actions
