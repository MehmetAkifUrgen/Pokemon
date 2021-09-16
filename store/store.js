import { configureStore } from '@reduxjs/toolkit'
import pockemonSlice from './pockemonSlice.js'

export default configureStore({
  reducer: {
    pockemon:pockemonSlice,
  },
})