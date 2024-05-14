
import { configureStore } from "@reduxjs/toolkit";
import { rickyAndMortySlice } from "../features/rickyAndMortySlice";

export const Store = configureStore({
    reducer: {
        RickyAndMorty: rickyAndMortySlice.reducer
    }
});
