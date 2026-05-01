import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addtocart: (state, action) => {
            console.log(action);
        },
        removefromcart: (state, action) => {
            console.log(action);

        }
    },
})

// Action creators are generated for each case reducer function
export const { addtocart , removefromcart } = CartSlice.actions;

export default CartSlice.reducer;