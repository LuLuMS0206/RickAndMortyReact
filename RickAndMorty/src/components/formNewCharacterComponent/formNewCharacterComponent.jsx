import { useDispatch } from "react-redux"
import { addCharacters } from "../../features/characters/charactersSlice"
import { useNavigate } from "react-router-dom"
import './formNewCharacterComponent.css'

export const FormNewCharacterComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const SubmitEvent = (event) => {
        event.preventDefault()
        const image = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'
        const name = event.target.elements.name.value
        const species = event.target.elements.specie.value
        dispatch(addCharacters({ name, species, image }))
        navigate ('/personList')
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