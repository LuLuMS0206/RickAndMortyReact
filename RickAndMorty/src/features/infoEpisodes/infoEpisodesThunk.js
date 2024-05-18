import {createAsyncThunk} from "@reduxjs/toolkit";


export const GetInfoEpisodesThunk = createAsyncThunk('infoEpisodes/getInfoEpisodes', async (id) => {
    const request = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    if (request.ok) {
        const data = await request.json();
        let ids = [];
        data.characters.map((character) => {
            ids.push(character.split('/')[5]);
        });

        const requestCharacters = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(',')}`);
        const dataCharacters = await requestCharacters.json();

        return {
            episode: data,
            characters: dataCharacters
        };
    }
});
