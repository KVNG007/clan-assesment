import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"" ,
    email:"" ,
    phoneNumber:"" ,
}

export const infoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload;
        },
    },
})

export const { setName, setEmail, setPhoneNumber } = infoSlice.actions;

export default infoSlice.reducer

