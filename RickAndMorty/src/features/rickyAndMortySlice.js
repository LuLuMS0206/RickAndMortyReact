import { createSlice } from "@reduxjs/toolkit";
import { GetRickyAndMortyThunk, GetEpisodesThunk, GetInfoEpisodesThunk } from "../features/rickyAndMortyThunk";

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
                state.status = 'pending';
            })
            .addCase(GetRickyAndMortyThunk.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = action.payload;
            })
            .addCase(GetRickyAndMortyThunk.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = '';
            })
    
    }
});


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


export const { addRickyAndMorty } = rickyAndMortySlice.actions;

export const { addEpisode } = episodeSlice.actions;

export const { addInfoEpisode } = infoEpisodeSlice.actions;


