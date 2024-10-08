import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice'
import userSlice from './userSlice'
const store = configureStore({
    reducer: {
        counterReducer: counterSlice,
        userReducer: userSlice
    }
})

export default store