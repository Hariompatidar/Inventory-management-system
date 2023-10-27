import { configureStore } from '@reduxjs/toolkit'
import  UserSliceReducer  from './slices/userSlice'

export const store = configureStore({
  reducer: {
    "user" : UserSliceReducer 
  },
})
