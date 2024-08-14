import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        video: [],
        category: "All"
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = true;
        },
        setHomeVideo:(state, action) => {
            state.video = action.payload;
        },
        setCategory:(state, action) => {
            state.category = action.payload;
        }
    },
});

export const { toggleMenu,closeMenu,setHomeVideo,setCategory } = appSlice.actions;
export default appSlice.reducer;
