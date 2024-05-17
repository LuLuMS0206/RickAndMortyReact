
import { configureStore } from "@reduxjs/toolkit";
import { rickyAndMortySlice } from "../features/rickyAndMortySlice";
import {episodeSlice} from "../features/rickyAndMortySlice";
import {infoEpisodeSlice} from "../features/rickyAndMortySlice";

export const Store = configureStore({
    reducer: {
        RickyAndMorty: rickyAndMortySlice.reducer,
        episodes: episodeSlice.reducer,
        infoEpisode: infoEpisodeSlice.reducer
    }
});
