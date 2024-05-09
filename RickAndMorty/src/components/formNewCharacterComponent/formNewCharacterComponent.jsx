
export const FormNewCharacterComponent = () => {
    return(
        <>
        {
            <form className='FormCharacterComponent__form'>
                <label className='FormCharacterComponent__form__label'>Name</label>
                <input className='FormCharacterComponent__form__input' type='text' placeholder='Name'></input>
                <label className='FormCharacterComponent__form__label'>Specie</label>
                <input className='FormCharacterComponent__form__input' type='text' placeholder='Specie'></input>
                <button className='FormCharacterComponent__form__button' value={SubmitEvent}>Send</button>
            </form>
        }
        </>
    )
}