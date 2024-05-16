import { useDispatch } from "react-redux"
import {addRickyAndMorty} from "../../features/rickyAndMortySlice"

export const FormNewCharacterComponent = () => {
    const dispatch = useDispatch()
    const SubmitEvent = (event) => {
event.preventDefault()
const image = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
const name = event.target.elements.name.value
const species = event.target.elements.specie.value
dispatch (addRickyAndMorty({name, species, image}))
    }
    return (
        <>
            {
                <form onSubmit={SubmitEvent} className='FormCharacterComponent__form'>
                    <label htmlFor="name" className='FormCharacterComponent__form__label'>Name</label>
                    <input id="name" name="name" className='FormCharacterComponent__form__input' type='text' placeholder='Name'></input>
                    <label htmlFor="specie" className='FormCharacterComponent__form__label'>Specie</label>
                    <input id="specie" name="specie" className='FormCharacterComponent__form__input' type='text' placeholder='Specie'></input>
                    <button className='FormCharacterComponent__form__button'>Send</button>
                </form>
            }
        </>
    )
}