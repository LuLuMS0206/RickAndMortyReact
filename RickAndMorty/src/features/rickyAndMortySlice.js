
import { createSlice } from "@reduxjs/toolkit";

export const rickyAndMortySlice = createSlice({
    name: 'RickyAndMorty',
    initialState: [],
    reducers: {
        addRickyAndMorty: (state, action) => {
            state.push(action.payload);
        },
    }
});

export const { addRickyAndMorty } = rickyAndMortySlice.actions;

