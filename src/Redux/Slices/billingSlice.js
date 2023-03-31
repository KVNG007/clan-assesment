import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    billing: "Monthly",
    option: "Arcade",

}

export const billingSlice = createSlice({
    name: "billing",
    initialState,
    reducers: {
        setBilling: (state, action) => {
            state.billing = action.payload;
        },
        setOption: (state, action) => {
            state.option = action.payload;
        },
    },
})

export const { setBilling, setOption } = billingSlice.actions;

export default billingSlice.reducer