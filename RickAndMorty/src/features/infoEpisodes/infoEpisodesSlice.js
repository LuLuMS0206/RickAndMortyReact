import { createSlice } from "@reduxjs/toolkit";
import {GetInfoEpisodesThunk } from "./infoEpisodesThunk";

export const infoEpisodeSlice = createSlice({
    name: 'infoEpisodes',
    initialState: {
        status: 'idle',
        data: [],
        error: null
    },
    reducers: {
        addInfoEpisode: (state, action) => {
            state.data.push(action.payload);
        },
        changes: (state, action) => {
            state.status = 'idle'
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase( GetInfoEpisodesThunk.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase( GetInfoEpisodesThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.data = action.payload;
        })
        .addCase( GetInfoEpisodesThunk.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = '';
        });
    
    }
});

export const { addInfoEpisode, changes } = infoEpisodeSlice.actions;