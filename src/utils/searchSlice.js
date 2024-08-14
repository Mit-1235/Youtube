import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const searchSlice = createSlice({
    name: "search",
    initialState: {

    },
    reducers:{
        cacheResults: (state, action) => {
            // { "ip" : ["iphone", "iphone 11"]}
            // state = { ...action.payload, ...state };
            // marge object
            state = Object.assign(state, action.payload);
        },
    },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
