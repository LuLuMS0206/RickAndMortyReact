/* eslint-disable react/prop-types */
import './cardsComponent.css';

export const CardsComponent = (props) => {

    return (
        <div className="cardsContent">
            <div >
                <img className="cardsContent__img" src={props.image} alt={props.name} />
            </div>
            <div>
                <h3 className="cardsContent__title">{props.name}</h3>
                <p className="cardsContent__species">{props.species}</p>
            </div>
        </div>
    )
}
