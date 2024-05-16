/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {EpisodesComponent} from '../components/episodesComponent/episodesComponent';
import {GetEpisodesThunk} from '../features/rickyAndMortyThunk'
import { useDispatch, useSelector } from 'react-redux';

import './styles.css'


export const ListEpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const Episodes = useSelector((state) => state.RickyAndMorty.data)
    const EpisodesStatus = useSelector((state) => state.RickyAndMorty.status)
    // const CharactersError = useSelector((state) => state.RickyAndMorty.error)

    useEffect(() => {
        if (EpisodesStatus === 'idle') {
            dispatch(GetEpisodesThunk())
        } else if (EpisodesStatus === 'pending'){
            setLoading(true)
        } else if (EpisodesStatus === 'fulfilled'){
            setLoading(false)
            setEpisodes(Episodes)
        } else {
            alert ("error")
        }
    
        }, [EpisodesStatus, Episodes, dispatch]);

    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/episode')
    //         .then(response => response.json())
    //         .then(data => setEpisodes(data.results))
    // }, []);

    return (
        <>
            {loading ? <p>Loading</p> : <div >
            <h1 className='cards__content__text'>Listado de Episodios de Rick and Morty</h1>
            <div className='cards__content__info'>
                {episodes.map(episode => (
                    <EpisodesComponent
                        id={episode.id}
                        key={episode.id}
                        name={episode.name}
                        airDate={episode.air_date}
                    />
                ))}
            </div>
        </div>
            }
        </>
    );
}

