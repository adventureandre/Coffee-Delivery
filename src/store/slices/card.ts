import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { addCardStorege, getCardStorege } from '../storege'

interface ItemCard {
  id: number
  quantity: number
}

export interface CardState {
  itens: ItemCard[]
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
      const [id, quantity] = action.payload
      const existingItem = state.cardState.itens.find((item) => item.id === id)

      if (!existingItem) {
        state.cardState.itens.push({
          id,
          quantity,
        })
      } else {
        existingItem.quantity = quantity
      }

      addCardStorege(state.cardState)
    },

    removeAll: (state, action: PayloadAction<number>) => {
      state.cardState.itens = state.cardState.itens.filter(
        (coffeeOfCart) => coffeeOfCart.id !== action.payload,
      )

      addCardStorege(state.cardState)
    },

    getQuantityCardItens: (state) => {
      console.log(state)
    },
  },
  extraReducers(builder) {
    builder.addCase(loadCart.fulfilled, (state, action) => {
      if (action.payload && action.payload.itens) {
        state.cardState = action.payload
      } else {
        // Caso contrário, inicialize cardState
        state.cardState = { itens: [] }
      }
    })
  },
})

export const card = cardSlice.reducer
export const { add, removeAll, getQuantityCardItens } = cardSlice.actions
