import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice'
const store = configureStore({
    reducer: {
        counterReducer: counterSlice,
        testReducer: "testSlice",
    }
})

export default store