import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  name: 'cardItens',
  initialState: {
    cardState: {
      itens: [
        {
          id: 1,
          quantity: 2,
        },
      ],
    },
  },
  reducers: {
    add: (state, action) => {
      console.log(state, action)
    },
  },
})

export const card = cardSlice.reducer
