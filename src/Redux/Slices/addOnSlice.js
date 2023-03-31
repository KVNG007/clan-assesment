import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    online: false,
    storage: false,
    custom: false,
}

export const addOnSlice = createSlice({
    name: "addOns",
    initialState,
    reducers: {
        setAddOns: (state, action) => {
            state[action.payload] = !state[action.payload];
        },
    },
})

export const { setAddOns } = addOnSlice.actions;

export default addOnSlice.reducer
