import { createSlice } from "@reduxjs/toolkit";
import {GetCharactersThunk } from "./charactersThunk";

export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
    reducers: {
        addCharacters: (state, action) => {
            state.data.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetCharactersThunk.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(GetCharactersThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(GetCharactersThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = '';
            })
    
    }
});

export const { addCharacters } = charactersSlice.actions;