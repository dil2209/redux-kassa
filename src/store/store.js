import { configureStore } from '@reduxjs/toolkit'
import foydalanuvchiReducer from './foydalanuvchi'
import kirimReducer from './kirim'
import chiqimReducer from './chiqim'
import kassaReducer from './kassa'

export default configureStore({
  reducer: {
    kirimReducer,
    chiqimReducer,
    kassaReducer,
    foydalanuvchiReducer


  },
})