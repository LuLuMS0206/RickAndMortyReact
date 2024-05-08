

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InfoEpisodesComponent } from '../components/infoEpisodesComponent/infoEpisodesComponent';

export const InfoEpisodesPage = () => {
    const { id } = useParams();
    const [infoepisodes, setInfoEpisodes] = useState([]); 

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            .then(response => response.json())
            .then(data => setInfoEpisodes(data)); 
    }, [id]);



    return (
        <div>
            <h1>Episodio: {infoepisodes.id}</h1> 
            <InfoEpisodesComponent
                name={infoepisodes.name}
                airDate={infoepisodes.air_date}
                episode={infoepisodes.episode}
                url={infoepisodes.url}
                created={infoepisodes.created}
                characters={infoepisodes.characters}
            />
        </div>
    );
}
