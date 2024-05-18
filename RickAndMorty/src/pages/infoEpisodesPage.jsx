import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InfoEpisodesComponent } from '../components/infoEpisodesComponent/infoEpisodesComponent';
import { CardsComponent } from '../components/cardsComponent/cardsComponent';
import { useDispatch, useSelector } from 'react-redux';
import { GetInfoEpisodesThunk } from '../features/infoEpisodes/infoEpisodesThunk'
import {changes} from "../features/infoEpisodes/infoEpisodesSlice"

export const InfoEpisodesPage = () => {
    const { id } = useParams();
    const [infoepisodes, setInfoEpisodes] = useState([]);
    const [characters, setCharacters] = useState([]);
    const dispatch = useDispatch()
    const Infoepisodes = useSelector((state) => state.infoEpisodes.data.episode)
    const InfoepisodesStatus = useSelector((state) => state.infoEpisodes.status)
    const Infocharacters = useSelector((state) => state.infoEpisodes.data.characters)
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (InfoepisodesStatus === 'idle') {
            dispatch(GetInfoEpisodesThunk(id))
        } else if (InfoepisodesStatus === 'pending') {
            setLoading(true)
        } else if (InfoepisodesStatus === 'fulfilled') {
            setLoading(false)
            setInfoEpisodes(Infoepisodes)
            setCharacters(Infocharacters)
        } else {
            alert("error")
        }

    }, [InfoepisodesStatus, Infoepisodes, Infocharacters, dispatch]);

    useEffect(() => {
        dispatch(changes())
    }, [])

    return (
        <>
            {loading ? <p>Loading</p> : (
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
                        {characters.map((character, index) => (
                            <CardsComponent
                                index={index}
                                key={character.id}
                                name={character.name}
                                image={character.image}
                                species={character.species}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}



// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { InfoEpisodesComponent } from '../components/infoEpisodesComponent/infoEpisodesComponent';
// import { CardsComponent } from '../components/cardsComponent/cardsComponent';
// import { useDispatch, useSelector } from 'react-redux';
// import { GetInfoEpisodesThunk } from '../features/rickyAndMortyThunk';

// export const InfoEpisodesPage = () => {
//     const { id } = useParams();
//     const [infoepisodes, setInfoEpisodes] = useState({});
//     const [characters, setCharacters] = useState([]);
//     const dispatch = useDispatch();
//     const InfoepisodesData = useSelector((state) => state.RickyAndMorty.data);
//     const InfoepisodesStatus = useSelector((state) => state.RickyAndMorty.status);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         if (InfoepisodesStatus === 'idle') {
//             dispatch(GetInfoEpisodesThunk(id));
//         } else if (InfoepisodesStatus === 'pending') {
//             setLoading(true);
//         } else if (InfoepisodesStatus === 'fulfilled') {
//             setLoading(false);
//             setInfoEpisodes(InfoepisodesData.episode);
//             setCharacters(InfoepisodesData.characters);
//         } else {
//             alert('Error al cargar los datos');
//         }
//     }, [InfoepisodesStatus, InfoepisodesData, dispatch, id]);

//     return (
//         <>
//             {loading ? <p>Loading</p> : (
//                 <div className='infoEpisodes__content'>
//                     <h1 className='infoEpisodes__content__text'>Episodio: {infoepisodes.id}</h1>
//                     <div className='infoEpisodes__content__info'>
//                         <InfoEpisodesComponent
//                             name={infoepisodes.name}
//                             airDate={infoepisodes.air_date}
//                             episode={infoepisodes.episode}
//                             url={infoepisodes.url}
//                             created={infoepisodes.created}
//                         />
//                     </div>
//                     <h2 className='characters__content__title'>Personajes que aparecen en el episodio</h2>
//                     <div className='characters__content'>
//                         {characters.map((character, index) => (
//                             <CardsComponent
//                                 index={index}
//                                 key={character.id}
//                                 name={character.name}
//                                 image={character.image}
//                                 species={character.species}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };
