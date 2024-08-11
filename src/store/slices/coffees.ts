import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { coffees as coffeesList } from '../../../data.json'
import { CoffeeIten } from '../../pages/Home/CoffeList'

interface InitialStateType {
  coffesList: CoffeeIten[] | null
}

const initialState: InitialStateType = {
  coffesList: [],
}

export const loadCoffes = createAsyncThunk('coffeItens/load', async () => {
  return coffeesList
})

export const coffeSlice = createSlice({
  name: 'coffeItens',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadCoffes.fulfilled, (state, action) => {
      state.coffesList = action.payload
    })
  },
})

export const coffees = coffeSlice.reducer
