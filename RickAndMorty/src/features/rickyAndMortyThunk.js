import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetRickyAndMortyThunk = createAsyncThunk('RickyAndMorty/getRickyAndMorty', async () => {
    const request = await fetch('https://rickandmortyapi.com/api/character');
    if (request.ok) {
        const data = await request.json();
        let arrayResults = data.results.map((character, index) => ({
            key: index,
            name: character.name,
            image: character.image,
            species: character.species,
        }));
        return arrayResults; 
    }
});



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


export const GetInfoEpisodesThunk = createAsyncThunk('RickyAndMorty/getRickyAndMorty', async () => {
    const request = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    if (request.ok) {
        const data = await request.json();
        let arrayResults = data.results.map((infoEpisode, index) => ({
            key: index,
            name: infoEpisode.name,
            airDate: infoEpisode.air_date,
            episode:infoEpisode.episode,
            url:infoEpisode.url,
            created:infoEpisode.created
        }));
        return arrayResults; 
    }
});
