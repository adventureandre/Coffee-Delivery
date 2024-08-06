import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Item {
  id: number
  quantity: number
}

interface CardState {
  cardState: {
    itens: Item[] // Agora é um array de itens, que pode ser vazio
  }
}

const initialState: CardState = {
  cardState: {
    itens: [],
  },
}

export const cardSlice = createSlice({
  name: 'cardItens',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<[number, number]>) => {
      const findState = state.cardState.itens.find((item) => {
        return item.id === action.payload[0]
      })

      if (!findState) {
        state.cardState.itens.push({
          id: action.payload[0],
          quantity: action.payload[1],
        })
      } else {
        findState.quantity += action.payload[1]
      }
    },
  },
})

export const card = cardSlice.reducer

export const { add } = cardSlice.actions
