
import { configureStore } from "@reduxjs/toolkit";
import {episodeSlice} from "../features/episodes/episodesSlice";
import {infoEpisodeSlice} from "../features/infoEpisodes/infoEpisodesSlice";
import { charactersSlice } from "../features/characters/charactersSlice";

export const Store = configureStore({
    reducer: {
        characters: charactersSlice.reducer,
        episodes: episodeSlice.reducer,
        infoEpisodes: infoEpisodeSlice.reducer
    }
});
