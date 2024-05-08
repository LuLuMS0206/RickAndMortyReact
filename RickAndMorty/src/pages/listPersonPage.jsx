
import { useState, useEffect} from 'react'
import { CardsComponent } from "../components/cardsComponent/cardsComponent"
import './styles.css'

export const ListPersonPage = () => {


    const [characters, setCharacters] = useState([]);

    // con useEffect hago la llamada a la API y actualizo el estado characters con los resultados

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }, []);


    // con el .map itero sobre el array
    return (
        <div>
            <h1>Listado de Personajes de Rick and Morty</h1>
            <div className="cards-container">
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
    );

}