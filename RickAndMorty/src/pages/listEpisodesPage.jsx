/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {EpisodesComponent} from '../components/episodesComponent/episodesComponent';
import {GetEpisodesThunk} from '../features/episodes/episodesThunk'
import { useDispatch, useSelector } from 'react-redux';

import './styles.css'


export const ListEpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const Episodes = useSelector((state) => state.episodes.data)
    const EpisodesStatus = useSelector((state) => state.episodes.status)
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
    console.log(episodes)

    return (
        <>
            {loading ? <p>Loading</p> : <div >
            <h1 className='cards__content__text'>Listado de Episodios de Rick and Morty</h1>
            <div className='cards__content__info'>
                {episodes.map(episode => (
                    <EpisodesComponent
                        id={episode.key}
                        key={episode.key}
                        name={episode.name}
                        airDate={episode.airDate}
                    />
                ))}
            </div>
        </div>
            }
        </>
    );
}

