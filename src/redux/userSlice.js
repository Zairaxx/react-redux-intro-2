import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("User/getUser", async () => {
    const response = await fetch("https://randomuser.me/api");
    const json = await response.json();
    return json;
});





const userSlice = createSlice({
    name:"User",
    initialState: {
        users:["Mario", "Luigi"],
        status:null
    },
    reducers: {
        addUser: (state,action) => {
            console.log("action för addUser", action);
            //Vi får mutera state med Redux Toolkit
            state.users.push(action.payload);
        }
    }, extraReducers: (builder) => {
        builder
        .addCase(getUser.fulfilled,
            (state,action) => {
            state.status = "Successfully got data!" ;
            let newUser = action.payload.results[0].name.first;
            state.users.push(newUser);
        })
        .addCase(getUser.pending, (state,action) => {
            console.log("pending data..", action.payload);
            state.status = "Fetching data...." ;
        }).addCase(getUser.rejected, (state,action) => {
            state.status = "NO data found.";
        })
        }



        // {
            // [getUser.fulfilled]: (state,action) => {
            //     console.log("action för getUser", action);
            //     // let newUser = action.payload
            // }
        // }
})

export default userSlice.reducer

export const {addUser} = userSlice.actions;