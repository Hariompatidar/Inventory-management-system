import { configureStore } from '@reduxjs/toolkit'
import  UserSliceReducer  from './slices/userSlice'
import ProductSliceReducer from './slices/productSlice'
import LoadingSliceReducer from './slices/loadingSlice' 
import LoginSliceReducer from './slices/loginSlice' 
 
export const store = configureStore({
  reducer: {
    "user" : UserSliceReducer  , 
    "product" : ProductSliceReducer ,
    "loading" : LoadingSliceReducer  , 
    "login" : LoginSliceReducer
  },
})
