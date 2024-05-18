import { createSlice } from "@reduxjs/toolkit";
import {GetEpisodesThunk } from "./episodesThunk";



export const episodeSlice = createSlice({
    name: 'episodes',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
    reducers: {
        addEpisode: (state, action) => {
            state.data.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(GetEpisodesThunk.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(GetEpisodesThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase(GetEpisodesThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = '';
        });
    
    }
});







export const { addEpisode } = episodeSlice.actions;




