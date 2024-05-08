/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {EpisodesComponent} from '../components/episodesComponent/episodesComponent';

export const ListEpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(response => response.json())
            .then(data => setEpisodes(data.results))
    }, []);

    return (
        <div>
            <h1>Listado de Episodios de Rick and Morty</h1>
            <div>
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
    );
}
