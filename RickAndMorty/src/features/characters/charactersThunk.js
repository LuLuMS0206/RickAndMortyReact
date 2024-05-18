import {createAsyncThunk} from "@reduxjs/toolkit";



export const GetCharactersThunk = createAsyncThunk('characters/getcharacters', async () => {
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
