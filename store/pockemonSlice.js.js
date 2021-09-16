import { createSlice } from '@reduxjs/toolkit'

export const pockemonSlice = createSlice({
  name: 'pockemon',
  initialState: {
    pockemonList: [],
  },
  reducers: {
    add: (state,action) => {
      console.log(action.payload)
       state.pockemonList=[...state.pockemonList,action.payload]
    },
    remove: (state,action) => {
     state.pockemonList= state.pockemonList.filter((item,index)=>index !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = pockemonSlice.actions
export const pockemonList = state => state.pockemon.pockemonList;
export default pockemonSlice.reducer