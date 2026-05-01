import { configureStore } from '@reduxjs/toolkit'
import CartSlicereducer from "./slices/CartSlice"
import transferslicereducer from "./slices/DatatransferSlice"
import { transferslice } from './slices/DatatransferSlice';

export const Mystore = configureStore({
  reducer: {
    cart: CartSlicereducer,
    transfer: transferslicereducer,
  },
})

export default Mystore;