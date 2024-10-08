import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name:"Counter",
    initialState: {
        count:0,
        users:[],
        test:"Test state"
    },
    reducers:{
        //Action type: Reducer-logik (state + action.payload => nytt State)
        increment: (state,action) => {
            state.count = state.count + action.payload
        }
    }});

export const {increment} = CounterSlice.actions;

export default CounterSlice.reducer