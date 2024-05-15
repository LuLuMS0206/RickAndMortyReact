
import { createSlice } from "@reduxjs/toolkit";
import {GetRickyAndMortyThunk} from "../features/rickyAndMortyThunk"

export const rickyAndMortySlice = createSlice({
    name: 'RickyAndMorty',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
    reducers: {
        addRickyAndMorty: (state, action) => {
            state.data.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetRickyAndMortyThunk.pending, (state, action) => {
            state.status = 'pending'
            })
            .addCase(GetRickyAndMortyThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.data = action.payload
            })
            .addCase(GetRickyAndMortyThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = ''
            });
    }
    
});

export const { addRickyAndMorty } = rickyAndMortySlice.actions;

