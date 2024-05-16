import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InfoEpisodesComponent } from '../components/infoEpisodesComponent/infoEpisodesComponent';
import { CardsComponent } from '../components/cardsComponent/cardsComponent';

export const InfoEpisodesPage = () => {
    const { id } = useParams();
    const [infoepisodes, setInfoEpisodes] = useState([]);
    const [characters, setCharacters] = useState([]);

    // useEffect(() => {
    //     fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setInfoEpisodes(data);
    //             const ids = data.characters.map(character => character.split("/")[5])
    //             fetch(`https://rickandmortyapi.com/api/character/${ids.join(',')}`)
    //                 .then(response => response.json())
    //                 .then(charactersData => setCharacters(charactersData))
    //                 .catch(error => console.error('Error fetching characters:', error));
    //         })
    //         .catch(error => console.error('Error fetching episode:', error));
    // }, [id]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            .then((response) => {
                if (response.ok) {
                    response.json().then((jsonData) => {
                        setInfoEpisodes(jsonData);
                        let ids = [];
                        jsonData.characters.map((character) => {
                            ids.push(character.split('/')[5]);
                        });
                        fetch(`https://rickandmortyapi.com/api/character/${ids.join(',')}`)
                            .then((response) => {
                                if (response.ok) {
                                    response.json().then((jsonCharacter) => {
                                        setCharacters(jsonCharacter);
                                    });
                                } else {
                                    console.log("error");
                                }
                            });
                    });
                } else {
                    console.log("error");
                }
            });
    }, []);
    

    return (
        <div className='infoEpisodes__content'>
            <h1 className='infoEpisodes__content__text'>Episodio: {infoepisodes.id}</h1>
            <div className='infoEpisodes__content__info'>
                <InfoEpisodesComponent
                    name={infoepisodes.name}
                    airDate={infoepisodes.air_date}
                    episode={infoepisodes.episode}
                    url={infoepisodes.url}
                    created={infoepisodes.created}
                />
            </div>
            <h2 className='characters__content__title'>Personajes que aparecen en el episodio</h2>
            <div className='characters__content'>
                {characters.map((character, index) =>
                    <CardsComponent
                        index={index}
                        key={character.id}
                        name={character.name}
                        image={character.image}
                        species={character.species} />
                )}
            </div>

        </div>
    );
}
