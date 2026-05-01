import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: "",
  brand:"Levi's",
  movieName:"Dabang",
}

export const transferslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCategory:(state, action)=>{
        console.log(action);
    },
    setBrand:(state, action)=>{
        console.log(action);
        state.brand=action.payload;
    },
    setMovieName:(state, action)=>{
        console.log(action);
        state.movieName=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCategory ,setBrand , setMovieName} = transferslice.actions;

export default transferslice.reducer;