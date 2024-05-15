import { createAsyncThunk } from "@reduxjs/toolkit";


export const GetRickyAndMortyThunk = createAsyncThunk ('RickyAndMorty/getRickyAndMorty', async() =>{
    const request = await fetch('https://rickandmortyapi.com/api/character')
    if (request.ok){
        const data = await request.json
        return data.data
    }
})