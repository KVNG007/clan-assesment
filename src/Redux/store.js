import {configureStore } from "@reduxjs/toolkit";
import pageReducer from "./Slices/pageSlice";
import billReducer from "./Slices/billingSlice";
import infoReducer from "./Slices/infoSlice";
import addOnReducer from "./Slices/addOnSlice";

export const store = configureStore({
    reducer: {
        page: pageReducer,
        billing: billReducer,
        info: infoReducer,
        addOns: addOnReducer,
    }
});

