import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"User",
    initialState: {
        users:["Mario", "Luigi"],
    },
    reducers: {
        addUser: (state,action) => {
            //Vi får mutera state med Redux Toolkit
            state.users.push(action.payload);
        }
    }
})

export default userSlice.reducer

export const {addUser} = userSlice.actions;