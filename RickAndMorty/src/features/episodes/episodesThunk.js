import { createAsyncThunk } from "@reduxjs/toolkit";




export const GetEpisodesThunk = createAsyncThunk('RickyAndMorty/getRickyAndMorty', async () => {
    const request = await fetch('https://rickandmortyapi.com/api/episode');
    if (request.ok) {
        const data = await request.json();
        let arrayResults = data.results.map((episode, index) => ({
            key: index,
            name: episode.name,
            airDate: episode.air_date,
        }));
        return arrayResults;
    }
});

