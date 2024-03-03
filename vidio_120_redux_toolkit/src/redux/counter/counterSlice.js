import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    multyply: (state)=>{
        state.value += 2
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multyply } = counterSlice.actions

export default counterSlice.reducer



/* 
syntex copy this source address
https://redux-toolkit.js.org/tutorials/quick-start
*/