import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { addCardStorege, getCardStorege } from '../storege'

interface Item {
  id: number
  quantity: number
}

export interface CardState {
  itens: Item[] // Agora é um array de itens, que pode ser vazio
}

interface InitialStateType {
  cardState: CardState
}

const initialState: InitialStateType = {
  cardState: {
    itens: [],
  },
}

export const loadCart = createAsyncThunk('cardItens/load', async () => {
  return await getCardStorege()
})

export const cardSlice = createSlice({
  name: 'cardItens',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<[number, number]>) => {
      const findState = state.cardState?.itens.find(
        (item) => item.id === action.payload[0],
      )

      if (!findState) {
        state.cardState?.itens.push({
          id: action.payload[0],
          quantity: action.payload[1],
        })
      } else {
        findState.quantity += action.payload[1]
      }

      addCardStorege(state.cardState)
    },
  },
  extraReducers(builder) {
    builder.addCase(loadCart.fulfilled, (state, action) => {
      state.cardState = action.payload
    })
  },
})

export const card = cardSlice.reducer

export const { add } = cardSlice.actions
