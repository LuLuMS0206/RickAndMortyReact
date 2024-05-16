
import { useState, useEffect } from 'react'
import { CardsComponent } from "../components/cardsComponent/cardsComponent"
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
// import { addRickyAndMorty } from '../features/rickyAndMortySlice';
import { GetRickyAndMortyThunk } from '../features/rickyAndMortyThunk'

export const ListPersonPage = () => {


    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const Characters = useSelector((state) => state.RickyAndMorty.data)
    const CharactersStatus = useSelector((state) => state.RickyAndMorty.status)
    // const CharactersError = useSelector((state) => state.RickyAndMorty.error)

    useEffect(() => {
        if (CharactersStatus === 'idle') {
            dispatch(GetRickyAndMortyThunk())
        } else if (CharactersStatus === 'pending'){
            setLoading(true)
        } else if (CharactersStatus === 'fulfilled'){
            setLoading(false)
            setCharacters(Characters)
        } else {
            alert ("error")
        }
    
        }, [CharactersStatus, Characters, dispatch]);


    // // con useEffect hago la llamada a la API y actualizo el estado characters con los resultados

    // useEffect(() => {
    //     dispatch(addRickyAndMorty())
    //     fetch('https://rickandmortyapi.com/api/character')
    //         .then(response => response.json())
    //         .then(data => setCharacters(data.results))
    // }, []);


    // con el .map itero sobre el array
    return (
        <>
            {loading ? <p>Loading</p> : <div>
                <h1 className='cards__container__text'>Listado de Personajes de Rick and Morty</h1>
                <div className="cards__container__info">
                    {characters.map(character => (
                        <CardsComponent
                            key={character.id}
                            name={character.name}
                            image={character.image}
                            species={character.species}
                        />
                    ))}
                </div>
            </div>
            }
        </>
    );
}


